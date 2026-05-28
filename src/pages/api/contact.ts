import type { APIRoute } from "astro";
import { z } from "astro/zod";
import { verifyTurnstile } from "@/lib/server/turnstile";
import { sendEmail } from "@/lib/server/mailer";

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json",
    },
  });

const contactSchema = z.object({
  name: z.string().trim().min(4).max(50),
  email: z.email(),
  message: z.string().trim().min(10).max(500),
  turnstileToken: z.string().trim(),
});

export const POST: APIRoute = async ({ request }) => {
  const payload = await request.json().catch(() => null);
  const parsedPayload = contactSchema.safeParse(payload);

  if (!parsedPayload.success) {
    return json(
      {
        message: "VALIDATION_FAILED",
      },
      400,
    );
  }

  const result = await verifyTurnstile(
    parsedPayload.data.turnstileToken,
    request.headers.get("cf-connecting-ip"),
  );

  if (!result.success) {
    return json(
      {
        message: "CAPTCHA_VERIFICATION_FAILED",
      },
      400,
    );
  }

  const emailSent = await sendEmail({
    name: parsedPayload.data.name,
    email: parsedPayload.data.email,
    message: parsedPayload.data.message,
  });

  if (!emailSent) {
    return json(
      {
        message: "EMAIL_DELIVERY_FAILED",
      },
      500,
    );
  }

  return json({
    message: "EMAIL_SENT",
  });
};
