//React
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//Navigate
import AppStack from "./StackNavigators/AppStack/index";

const { Navigator, Screen } = createStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="AppStack"
        component={AppStack}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;
