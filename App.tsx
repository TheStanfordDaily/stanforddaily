import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomePageWrapper } from "./components/pages/HomePage";
import { PostPageWrapper } from "./pages/[year]/[month]/[day]/[slug]";
import { CategoryArchivePageWrapper } from "./components/ArchivePage/CategoryArchivePage";
import { TimeArchivePageWrapper } from "./components/ArchivePage/TimeArchivePage";

const AppNavigator = createStackNavigator(
  {
    home: HomePageWrapper,
    post: PostPageWrapper,
    timeArchive: TimeArchivePageWrapper,
    categoryArchive: CategoryArchivePageWrapper,
  },
  {
    initialRouteName: "home",
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
