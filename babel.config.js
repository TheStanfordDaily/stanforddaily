/* eslint-disable */
module.exports = function(api) {
  const isWeb = api.caller(isTargetWeb);
  const isDev = process.env.NODE_ENV === "development";
  return {
    presets: [
      ["babel-preset-expo"],
      isWeb && ["@emotion/babel-preset-css-prop"],
    ].filter(Boolean),
    // presets: ['@expo/next-adapter/babel'],
    plugins: [
      !isWeb && ["emotion"],
      !isDev && ["transform-remove-console"],
      ["module-resolver", require("./module-resolver-config")],
    ].filter(Boolean),
  };
};

function isTargetWeb(caller) {
  return caller && caller.name === "babel-loader";
}
