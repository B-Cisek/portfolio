import type { APIRoute } from "astro";
import { env as cloudflareEnv } from "cloudflare:workers";
import { z } from "astro/zod";
import { Resend } from "resend";

const CONTACT_RECIPIENT_EMAIL = "bartlomiej.cisek@outlook.com";

const workerEnv = cloudflareEnv as typeof cloudflareEnv & {
  RESEND_API_KEY: string;
  RESEND_FROM_EMAIL: string;
};

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long.")
    .max(50, "Name must not exceed 50 characters."),

  email: z.email().trim(),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters long.")
    .max(5000, "Message must not exceed 5000 characters."),
  turnstileToken: z.string().min(1, "Turnstile token is required."),
});

type ContactField = keyof z.infer<typeof contactSchema>;

const getFieldErrors = (error: z.ZodError<z.infer<typeof contactSchema>>) => {
  const flattenedErrors = error.flatten().fieldErrors;

  return Object.fromEntries(
    Object.entries(flattenedErrors)
      .map(([field, messages]) => [field, messages?.[0]])
      .filter((entry): entry is [ContactField, string] => Boolean(entry[1])),
  );
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const createMessageHtml = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
    <h1 style="margin: 0 0 24px; font-size: 24px;">Nowa wiadomosc z formularza portfolio</h1>
    <p style="margin: 0 0 12px;"><strong>Imie:</strong> ${escapeHtml(name)}</p>
    <p style="margin: 0 0 12px;"><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p style="margin: 24px 0 8px;"><strong>Wiadomosc:</strong></p>
    <div style="white-space: pre-wrap; border-radius: 12px; background: #f3f4f6; padding: 16px;">
      ${escapeHtml(message)}
    </div>
  </div>
`;

const createMessageText = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) =>
  [
    "Nowa wiadomosc z formularza portfolio",
    "",
    `Imie: ${name}`,
    `Email: ${email}`,
    "",
    "Wiadomosc:",
    message,
  ].join("\n");

export const POST: APIRoute = async ({ request }) => {
  const payload = await request.json().catch(() => null);
  const parsedPayload = contactSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return new Response(
      JSON.stringify({
        message: "Invalid form payload.",
        fieldErrors: getFieldErrors(parsedPayload.error),
      }),
      {
        status: 400,
        headers: {
          "content-type": "application/json",
        },
      },
    );
  }

  const verificationFormData = new URLSearchParams({
    secret: cloudflareEnv.TURNSTILE_SECRET_KEY,
    response: parsedPayload.data.turnstileToken,
  });

  const remoteIp = request.headers.get("CF-Connecting-IP");
  if (remoteIp) {
    verificationFormData.set("remoteip", remoteIp);
  }

  const verificationResponse = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: verificationFormData.toString(),
    },
  );

  if (!verificationResponse.ok) {
    return new Response(
      JSON.stringify({
        message: "Turnstile verification failed.",
      }),
      {
        status: 502,
        headers: {
          "content-type": "application/json",
        },
      },
    );
  }

  const verificationResult = z
    .object({
      success: z.boolean(),
      ["error-codes"]: z.array(z.string()).optional(),
    })
    .safeParse(await verificationResponse.json().catch(() => null));

  if (!verificationResult.success || !verificationResult.data.success) {
    return new Response(
      JSON.stringify({
        message: "Turnstile token is invalid.",
        fieldErrors: {
          turnstileToken: "Turnstile token is invalid.",
        },
      }),
      {
        status: 400,
        headers: {
          "content-type": "application/json",
        },
      },
    );
  }

  const resend = new Resend(workerEnv.RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: workerEnv.RESEND_FROM_EMAIL,
    to: CONTACT_RECIPIENT_EMAIL,
    replyTo: parsedPayload.data.email,
    subject: `Portfolio contact from ${parsedPayload.data.name}`,
    html: createMessageHtml(parsedPayload.data),
    text: createMessageText(parsedPayload.data),
  });

  if (error || !data) {
    console.error("Resend email send failed", error);

    return new Response(
      JSON.stringify({
        message: "Email delivery failed.",
      }),
      {
        status: 502,
        headers: {
          "content-type": "application/json",
        },
      },
    );
  }

  return new Response(
    JSON.stringify({
      message: "Message accepted.",
      id: data.id,
    }),
    {
      headers: {
        "content-type": "application/json",
      },
    },
  );
};
