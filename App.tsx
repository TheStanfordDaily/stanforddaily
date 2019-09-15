import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomePageWrapper } from "components/pages/HomePage";
import { ArticlePageWrapper } from "components/pages/ArticlePage";
import { CategoryArchivePageWrapper } from "components/ArchivePage/CategoryArchivePage";
import { TimeArchivePageWrapper } from "components/ArchivePage/TimeArchivePage";

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
export default AppContainer;
