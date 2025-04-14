/// <reference types="vitest" /> /// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@tests': path.resolve(__dirname, './tests/'),
    },
  },
  test: {
    environment: 'jsdom',
    exclude: ['./.stryker-tmp/*', './node_modules/*'],
    setupFiles: ['./tests/unit/config//vitest.setup.ts'],
    globals: true,
    coverage: {
      enabled: true,
      // provider: "istanbul",
      exclude: ['dist/**', '**.{config,workspace}.*{js,ts}', './.stryker-tmp/**', './src/main.tsx'],
      reportsDirectory: './reports/unit',
      thresholds: {
        statements: 90,
        branches: 90,
        functions: 90,
        lines: 90,
      },
    },
  },
});
