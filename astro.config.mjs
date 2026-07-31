import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE_URL || "https://titleiq.nz";

export default defineConfig({
  site,
  trailingSlash: "always",
  output: "static",
  integrations: [sitemap({
    filter: (page) => !page.endsWith("/404/")
  })]
});
