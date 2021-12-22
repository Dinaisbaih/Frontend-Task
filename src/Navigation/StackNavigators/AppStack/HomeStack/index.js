import React from "react";
import CardDetails from "../../../../Screens/CardDetails";
import Home from "../../../../Screens/Home/index";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: "cart",
        }}
      />
      <Screen
        name="CardDetails"
        component={CardDetails}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default HomeStack;
