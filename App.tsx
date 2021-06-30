import React from "react";
import { StatusBar } from "react-native";
import * as Font from "expo-font";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { STANFORD_COLORS, FONTS } from "helpers/constants";
import { HomePageWrapper } from "components/pages/HomePage";
import { ArticlePageWrapper } from "components/pages/WordPress Post";
import { CategoryArticleListPageWrapper } from "components/pages/ArticleListPage/CategoryArticleListPage";
import { TimeArticleListPageWrapper } from "components/pages/ArticleListPage/TimeArticleListPage";
import LoadingView from "components/Loading";

const AppNavigator = createStackNavigator(
  {
    home: HomePageWrapper,
    post: ArticlePageWrapper,
    timeArticleList: TimeArticleListPageWrapper,
    categoryArticleList: CategoryArticleListPageWrapper,
  },
  {
    initialRouteName: "home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: STANFORD_COLORS.CARDINAL_RED,
      },
      headerTintColor: STANFORD_COLORS.WHITE,
      headerTitleStyle: {
        fontFamily: FONTS.ARTICLE_TITLE.fontFamily,
        fontWeight: undefined, // https://github.com/react-navigation/react-navigation/issues/542#issuecomment-438631938
      },
      headerBackTitleStyle: {
        fontFamily: FONTS.ARTICLE_TITLE.fontFamily,
        fontSize: 14,
      },
    },
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
      "LibreBaskerville-Bold": require("./static/fonts/LibreBaskerville/LibreBaskerville-Bold.ttf"), // eslint-disable-line global-require
      "PTSerif-Regular": require("./static/fonts/PTSerif/PTSerif-Regular.ttf"), // eslint-disable-line global-require
      "IBMPlexSansCondensed-Regular": require("./static/fonts/IBM-Plex-Sans/ttf/IBMPlexSansCondensed-Regular.ttf"), // eslint-disable-line global-require
      Canterbury: require("./static/fonts/Canterbury/Canterbury.ttf"), // eslint-disable-line global-require
    });

    this.setState({ fontLoaded: true });
  }

  render(): React.ReactNode {
    return (
      <>
        <StatusBar barStyle="light-content" />
        {this.state.fontLoaded ? (
          <AppContainer />
        ) : (
          <LoadingView /> // TODO: MAYBE PASS THIS TO APPCONTAINER AND HANDLE IT IN WRAPPER? SO THAT IF WE USE ANIMATION FOR LOADING IT WILL WORK
        )}
      </>
    );
  }
}

export default App;
