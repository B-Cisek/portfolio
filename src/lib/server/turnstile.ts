import { TURNSTILE_SECRET_KEY } from "astro:env/server";

interface TurnstileVerificationResult {
  success?: boolean;
}

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

    if (!response.ok) {
      return { success: false };
    }

    const result = (await response
      .json()
      .catch(() => null)) as TurnstileVerificationResult | null;

    return { success: result?.success === true };
  } catch {
    return { success: false };
  }
}
