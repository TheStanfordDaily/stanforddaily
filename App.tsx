import { createStackNavigator, createAppContainer } from "react-navigation";
import { IndexPageWrapper } from "./pages/index";
import { PostPageWrapper } from "./pages/[year]/[month]/[day]/[slug]";
import { CategoryArchivePageWrapper } from "./components/ArchivePage/CategoryArchivePage";
import { TimeArchivePageWrapper } from "./components/ArchivePage/TimeArchivePage";

const AppNavigator = createStackNavigator(
  {
    index: IndexPageWrapper,
    post: PostPageWrapper,
    timeArchive: TimeArchivePageWrapper,
    categoryArchive: CategoryArchivePageWrapper,
  },
  {
    initialRouteName: "index",
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
