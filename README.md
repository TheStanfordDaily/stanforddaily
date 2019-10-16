[![The Stanford Daily logo](https://github.com/TheStanfordDaily/stanforddaily-graphic-assets/raw/master/DailyLogo/DailyLogo.png)](https://www.stanforddaily.com/)

# The Stanford Daily

This is the Stanford Daily website & mobile app. Visit the site at https://www.stanforddaily.com/ (not live yet) and download the app at https://app.stanforddaily.com/. Contributions welcome!

## Setup

```bash
# Installation
yarn

# Start
yarn start
# To find more options
yarn start --help
```

## Release

For the production channel:

```bash
yarn expo build:ios --release-channel production
yarn expo build:android --release-channel production

yarn expo publish --release-channel production
```

For the development channel,

```bash
yarn expo build:ios --release-channel development
yarn expo build:android --release-channel development

yarn expo publish --release-channel development
```
hey
