import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const compat = new FlatCompat();

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  js.configs.recommended,
  {
    files: ["app/**/*.{ts,tsx,js,jsx}", "components/**/*.{ts,tsx,js,jsx}", "lib/**/*.{ts,tsx,js,jsx}"],
    ignores: [
      ".next/",
      "node_modules/",
      "out/",
      "dist/",
      "build/",
      "scripts/",
      "*.config.*",
      "*.d.ts",
      "cleanup-marty.sh",
      "package-lock.json",
      "pnpm-lock.yaml",
      "yarn.lock",
      ".env*",
    ],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value='Marty']",
          message: "Always write MARTY in all caps.",
        },
        {
          selector: "Literal[value='marty']",
          message: "Always write MARTY in all caps.",
        },
      ],
    },
  },
];

export default eslintConfig;