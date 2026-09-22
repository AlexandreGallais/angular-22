// vitest-base.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    passWithNoTests: true,
    coverage: {
      enabled: true,
      provider: 'v8',
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.spec.ts', 'src/**/*.d.ts', 'src/main.ts', 'src/environments/**'],
      reporter: ['json'],
      reportsDirectory: './coverage/app',
      thresholds: {
        statements: 0,
        branches: 0,
        functions: 0,
        lines: 0,
      },
    },
  },
});
