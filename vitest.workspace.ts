import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineWorkspace } from "vitest/config";
import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineWorkspace([
  {
    extends: "vite.config.ts",
    plugins: [storybookTest({ configDir: path.join(dirname, ".storybook") })],
    test: {
      name: "storybook",
      browser: {
        provider: "playwright",
        enabled: true,
        headless: true,
        instances: [
          {
            browser: "chromium",
            launch: {},
            context: {},
          },
        ],
      },
      setupFiles: [".storybook/vitest.setup.ts"],
    },
  },
  {
    extends: "vite.config.ts",
    test: {
      name: "spec",
      include: ["src/**/*.test.tsx"],
      environment: "jsdom",
      setupFiles: ["./setup-test-env.ts"],
    },
  },
]);
