module.exports = {
  extends: [
    "@it-incubator/eslint-config",
    "plugin:storybook/recommended",
    "plugin:storybook/recommended",
  ],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
