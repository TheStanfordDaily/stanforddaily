module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "@emotion/babel-preset-css-prop"]
  };
};
