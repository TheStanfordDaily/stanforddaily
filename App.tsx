import { createStackNavigator, createAppContainer } from "react-navigation";
import { IndexWrapper } from "./pages/index";
import { PostPageViewWrapper } from "./pages/[year]/[month]/[day]/[slug]";

const AppNavigator = createStackNavigator(
  {
    index: IndexWrapper,
    post: PostPageViewWrapper,
  },
  {
    initialRouteName: "index",
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
