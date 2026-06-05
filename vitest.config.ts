import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Vitest config mirrors the Vite/TS setup and runs in a jsdom environment.
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
  },
});
