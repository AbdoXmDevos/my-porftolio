import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable the unescaped entities rule
      "react/no-unescaped-entities": "off",
      // Disable the img element rule
      "@next/next/no-img-element": "off",
      // Disable unused vars warnings for imports
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",
      // Disable explicit any rule
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
