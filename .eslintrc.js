module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "airbnb",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/babel",
    "prettier/react",
  ],
  plugins: ["@typescript-eslint", "babel", "prettier", "react", "emotion"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-props-no-spreading": [
      "error",
      {
        html: "enforce",
        custom: "ignore",
      },
    ],
    "emotion/syntax-preference": ["error", "object"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "warn",
    "jsx-a11y/anchor-is-valid": "off",
    // `console`s will be removed by `babel-plugin-transform-remove-console` in production.
    "no-console": "off",
  },
};
