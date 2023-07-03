// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        // kantoquake: "./great_kanto_earthquake.html",
        // quaketunami: "./earthquake_tsunami.html",
      },
      output: {
        dir: "dist",
      },
    },
  },
  publicDir: "public",
  base: "",
});
