const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withTM = require("next-transpile-modules");

// module.exports = withExpo({
//   projectRoot: __dirname,
// });

module.exports = withPlugins([
  [
    withTM,
    {
      // TODO: I'm not sure exactly why we need this.
      transpileModules: ["^@emotion", "emotion-native-media-query"],
      target: "serverless",
    },
  ],
  withFonts,
  withImages,
  [withExpo, { projectRoot: __dirname }],
]);
