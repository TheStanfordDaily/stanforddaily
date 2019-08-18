import { createStackNavigator, createAppContainer } from "react-navigation";
import { IndexWrapper } from "./pages/index";
import { PostWrapper } from "./pages/[year]/[month]/[day]/[slug]";

const AppNavigator = createStackNavigator(
  {
    index: IndexWrapper,
    post: PostWrapper,
  },
  {
    initialRouteName: "index",
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
