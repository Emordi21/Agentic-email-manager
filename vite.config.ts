/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // reads the "@/" shortcut from tsconfig, so it is defined in one place
  resolve: { tsconfigPaths: true },
  test: {
    // only run tests in src/ (supabase/ uses Deno, not Node)
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
})
