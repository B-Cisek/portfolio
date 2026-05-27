// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),

  integrations: [react()],
  output: "server",
  env: {
    schema: {
      PUBLIC_TURNSTILE_SITE_KEY: envField.string({
        context: "client",
        access: "public",
      }),
      TURNSTILE_SECRET_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
      RESEND_API_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
      RESEND_FROM_EMAIL: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
});
