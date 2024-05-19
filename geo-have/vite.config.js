import { fileURLToPath, URL } from "node:url";
import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      registerSWPrompt: true,
      includeAssets: [
        "Icon-20x20.png",
        "Icon-40x40.png",
        "Icon-60x60.png",
        "Icon-marketing-1024x1024.png",
        "favicon.ico",
      ],
      manifest: {
        name: "Geografisk Have",
        description: "A treasure hunt app for the visitors to have fun with",
        icons: [
          {
            src: "./public/appicons/Icon-20x20.png",
            type: "image/png",
            sizes: "60x60",
          },
          {
            src: "./public/appicons/Icon-40x40.png",
            type: "image/png",
            sizes: "80x80",
          },
          {
            src: "./public/appicons/Icon-60x60.png",
            type: "image/png",
            sizes: "180x180",
          },
          {
            src: "./public/appicons/Icon-marketing-1024x1024.png",
            type: "image/png",
            sizes: "1024x1024",
          },
        ],
        display: "standalone",
        start_url: "/index.html",
        background_color: "#fef9ea",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
