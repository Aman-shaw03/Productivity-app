// eslint.config.js
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";
import eslint from "@eslint/js";

export default [
  eslint.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      // Add your custom ESLint rules here
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      semi: ["error", "always"],
      quotes: ["error", "single", { avoidEscape: true }],
    },
  },
  eslintPluginPrettierRecommended, // Must be the last element to override conflicting rules
];
