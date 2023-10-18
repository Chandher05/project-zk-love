import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/lib": path.resolve(__dirname, "lib/"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
