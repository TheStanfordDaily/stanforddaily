module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    "airbnb",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier"
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
    "import/resolver": {
      "babel-module": require("./module-resolver-config"),
    },
  },
  rules: {
    "prettier/prettier": "error",
    "import/prefer-default-export": "off",
    "react/prop-types": ["error", { skipUndeclared: true }],
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "emotion/syntax-preference": ["error", "object"],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "warn",
    "jsx-a11y/anchor-is-valid": "off",
    "no-else-return": "off",
    "no-underscore-dangle": "off",
    // `console`s will be removed by `babel-plugin-transform-remove-console` in production.
    "no-console": "off",
  },
};
