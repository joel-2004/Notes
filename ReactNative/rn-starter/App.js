import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import FirstComponent from "./src/screens/FirstComponent"
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import Counter from "./src/screens/Counter";
import NameForm from "./src/screens/NameForm";
import FetchData from "./src/screens/FetchData";
import ColorScreen from "./src/screens/ColorScreen";
import SingleColorScreen from "./src/screens/SingleColorScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    First: FirstComponent,
    List: ListScreen,
    Image: ImageScreen,
    Counter: Counter,
    NameForm: NameForm,
    Fetch: FetchData,
    Color: ColorScreen,
    SingleColor: SingleColorScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
