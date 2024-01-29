import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/curriculum-vitae": "/cv",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    mdx(),
    react(),
  ],
});
