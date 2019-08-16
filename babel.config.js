/* eslint func-names: ["off"] */
module.exports = function(api) {
  api.cache(true);

  const isDev = process.env.NODE_ENV === "development";
  return {
    presets: ["babel-preset-expo"],
    plugins: ["emotion", !isDev && "transform-remove-console"].filter(Boolean),
  };
};
