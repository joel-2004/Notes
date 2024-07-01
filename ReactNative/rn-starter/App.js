import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";

import {
  BoxModel, ColorScreen, Counter, Dictionary, FetchData, FirstComponent,
  FlexBox, HomeScreen, ImageScreen, ListScreen, MapScreen, NameForm,
  SingleColorScreen, ToDo, Calculator, RockPaperScissor
} from "./src/screens/index"
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
    ToDo: ToDo,
    Dictionary: Dictionary,
    Calculator: Calculator,
    RockPaperScissor: RockPaperScissor
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
