/// <reference types="vitest" /> /// <reference types="vite/client" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: './src/pages',
      routeToken: 'page',
      routeFileIgnorePattern: '.*(components|view|controller|types|hooks).*',
      semicolons: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@components': path.resolve(__dirname, './src/components/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@services': path.resolve(__dirname, './src/services/'),
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
      exclude: [
        'dist/**',
        '**/*.d.ts',
        '**.{config,workspace}.*{js,ts}',
        './stryker-tmp/**',
        'stryker-tmp/**',
        '.stryker-tmp/**',
        './src/main.tsx',
        './src/routeTree.gen.ts',
        './.storybook/*',
        '**/*.stories.{ts,tsx,js,jsx}',
      ],
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
