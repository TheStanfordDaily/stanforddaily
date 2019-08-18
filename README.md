[![The Stanford Daily logo](https://github.com/TheStanfordDaily/stanforddaily-graphic-assets/raw/master/DailyLogo/DailyLogo.png)](https://www.stanforddaily.com/)

# The Stanford Daily

This is the Stanford Daily website & mobile app. Visit the site at https://www.stanforddaily.com/ (not live yet) and download the app at https://app.stanforddaily.com/. Contributions welcome!

## Setup

```bash
# Installation
npm install -g expo-cli
yarn

# Start
yarn start
# or
yarn ios
yarn android
yarn web
```

## Release

For the production channel:

```bash
expo build:ios --release-channel production
expo build:android --release-channel production

expo publish --release-channel production
```

For the development channel,

```bash
expo build:ios --release-channel development
expo build:android --release-channel development

expo publish --release-channel development
```
