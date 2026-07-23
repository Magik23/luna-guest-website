// @ts-check

import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

/**
 * Luna Guest public website configuration.
 *
 * The website is statically generated and deployed through Cloudflare.
 * Setting the production site URL gives Astro and our SEO layout a
 * reliable base for canonical and social-sharing URLs.
 */
export default defineConfig({
  site: "https://lunaguest.com",
  adapter: cloudflare()
});