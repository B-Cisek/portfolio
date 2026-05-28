import { TURNSTILE_SECRET_KEY } from "astro:env/server";

export async function verifyTurnstile(
  token: string,
  remoteIp: string | null,
): Promise<{ success: boolean }> {
  try {
    const payload = {
      secret: TURNSTILE_SECRET_KEY,
      response: token,
      ...(remoteIp ? { remoteip: remoteIp } : {}),
    };

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const result = await response.json();

    console.log(result);

    return { success: true };
  } catch (error) {
    return { success: false };
  }
}
