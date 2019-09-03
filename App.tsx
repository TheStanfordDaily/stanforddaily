import { createStackNavigator, createAppContainer } from "react-navigation";
import { IndexPageWrapper } from "./pages/index";
import { PostPageWrapper } from "./pages/[year]/[month]/[day]/[slug].native";

const AppNavigator = createStackNavigator(
  {
    index: IndexPageWrapper,
    post: PostPageWrapper,
  },
  {
    initialRouteName: "index",
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
