import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  components: true, // Ensure auto-import is enabled
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "@nuxt/icon"],
  googleFonts: {
    families: {
      Montserrat: [400, 700], // Specify font weights
    },
  },
});