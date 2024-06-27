import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import FirstComponent from "./src/screens/FirstComponent"
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import Counter from "./src/screens/Counter";
import NameForm from "./src/screens/NameForm";
import FetchData from "./src/screens/FetchData";
import ColorScreen from "./src/screens/ColorScreen";
import SingleColorScreen from "./src/screens/SingleColorScreen";
import BoxModel from "./src/screens/BoxModel";
import FlexBox from "./src/screens/FlexBox";
import MapScreen from "./src/screens/MapScreen";
import ToDo from "./src/screens/ToDo";

export const Context = React.createContext();

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
    SingleColor: SingleColorScreen,
    BoxModel: BoxModel,
    Flex: FlexBox,
    Map: MapScreen,
    ToDo: ToDo
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Context.Provider value={5}>
      <App></App>
    </Context.Provider>
  );
}

//export default createAppContainer(navigator);
