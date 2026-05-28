import {
  RESEND_API_KEY,
  RESEND_FROM_EMAIL,
  CONTACT_EMAIL,
} from "astro:env/server";

import { Resend } from "resend";

export interface SendEmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: SendEmailData): Promise<boolean> => {
  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: RESEND_FROM_EMAIL,
    to: CONTACT_EMAIL,
    replyTo: data.email,
    subject: `Portfolio contact from ${data.name}`,
    html: createHtml(data),
  });

  if (error) {
    console.error(error);
    return false;
  }

  return true;
};

const escapeHtml = (value: string): string =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const createHtml = (data: SendEmailData): string => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
    <h1 style="margin: 0 0 24px; font-size: 24px;">Nowa wiadomosc z formularza portfolio</h1>
    <p style="margin: 0 0 12px;"><strong>Imie:</strong> ${escapeHtml(data.name)}</p>
    <p style="margin: 0 0 12px;"><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p style="margin: 24px 0 8px;"><strong>Wiadomosc:</strong></p>
    <div style="white-space: pre-wrap; border-radius: 12px; background: #f3f4f6; padding: 16px;">
      ${escapeHtml(data.message)}
    </div>
  </div>
`;
