import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // https://stackoverflow.com/a/67676242
    alias: [
      {
        find: "@mood",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});
