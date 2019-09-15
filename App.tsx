import React from "react";
import * as Font from "expo-font";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomePageWrapper } from "components/pages/HomePage";
import { ArticlePageWrapper } from "components/pages/ArticlePage";
import { CategoryArchivePageWrapper } from "components/pages/CategoryArchivePage";
import { TimeArchivePageWrapper } from "components/pages/TimeArchivePage";
import LoadingView from "components/Loading";

const AppNavigator = createStackNavigator(
  {
    home: HomePageWrapper,
    post: ArticlePageWrapper,
    timeArchive: TimeArchivePageWrapper,
    categoryArchive: CategoryArchivePageWrapper,
  },
  {
    initialRouteName: "home",
  },
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component<{}, { fontLoaded: boolean }> {
  constructor(props) {
    super(props);
    this.state = { fontLoaded: false };
  }

  async componentDidMount(): Promise<void> {
    await Font.loadAsync({
      "Faune-Display_Black": require("./static/fonts/Faune/ttf/Faune-Display_Black.ttf"), // eslint-disable-line global-require
      "Faune-Text_Bold": require("./static/fonts/Faune/ttf/Faune-Text_Bold.ttf"), // eslint-disable-line global-require
      "PublicSans-Regular": require("./static/fonts/PublicSans/PublicSans-Regular.ttf"), // eslint-disable-line global-require
      "IBMPlexSansCondensed-Regular": require("./static/fonts/IBM-Plex-Sans/ttf/IBMPlexSansCondensed-Regular.ttf"), // eslint-disable-line global-require
    });

    this.setState({ fontLoaded: true });
  }

  render(): React.ReactNode {
    if (this.state.fontLoaded) {
      return <AppContainer />;
    } else {
      // TODO: MAYBE PASS THIS TO APPCONTAINER AND HANDLE IT IN WRAPPER? SO THAT IF WE USE ANIMATION FOR LOADING IT WILL WORK
      return <LoadingView />;
    }
  }
}

export default App;
