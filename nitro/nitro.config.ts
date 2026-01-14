import { defineConfig } from "nitro";

export default defineConfig({
  routeRules: {
    '/': { isr: true }
  },
});
