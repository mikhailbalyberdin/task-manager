import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "task-manager",
  plugins: [
    tailwindcss(),
  ],
})