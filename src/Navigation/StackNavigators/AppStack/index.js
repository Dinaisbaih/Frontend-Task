import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CardDetails from "../../../Screens/CardDetails";
import HomeStack from "./HomeStack";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const AppStack = () => {
  return (
    <Navigator
      barStyle={{ backgroundColor: "white", height: 60 }}
      activeColor="red"
      inactiveColor="green"
    >
      <Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => <Entypo name="menu" size={30} />,
        }}
      />
      <Screen
        name="App"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-basket" size={22} />
          ),
        }}
      />
      <Screen
        name="Apps"
        component={HomeStack}
        options={{
          headerShown: false,

          tabBarLabel: "",
          tabBarIcon: ({ color }) => <FontAwesome name="trophy" size={25} />,
        }}
      />
      <Screen
        name="Appz"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color }) => <Fontisto name="smiley" size={24} />,
        }}
      />
    </Navigator>
  );
};

export default AppStack;
