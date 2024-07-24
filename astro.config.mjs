import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: { prefixDefaultLocale: false },

    fallback: { en: "es" },
  },

  output: "server",
  adapter: vercel(),
  integrations: [tailwind(), react()],
});
