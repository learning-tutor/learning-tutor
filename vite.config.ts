/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import wyw from "@wyw-in-js/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), wyw()],
  test: {
    globals: true,
    root: "./src",
    environment: "happy-dom",
  },
});
