/// <reference types="vitest/config" />
import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // lets us write "@/lib/x" instead of "../../lib/x"
    alias: { '@': path.resolve(__dirname, './src') },
  },
  test: {
    // only run tests in src/ (supabase/ uses Deno, not Node)
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
})
