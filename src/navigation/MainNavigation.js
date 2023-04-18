import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  DetailsScreen,
  HomeScreen,
  LoginScreen,
  MoviesScreen,
  SearchScreen,
  SeasonsScreen,
} from "../screens";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function MoviesStackScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Movies") {
              iconName = "home";
            } else if (route.name === "Search") {
              iconName = "search";
            }
            return (
              <Ionicons
                name={iconName}
                size={30}
                color={focused ? "white" : "gray"}
              />
            );
          },
          tabBarStyle: {
            tabBarBackground: "RGB(30, 41, 59)",
            backgroundColor: "rgb(30, 41, 59)",
            borderTopColor: "rgb(30, 41, 59)",
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        };
      }}
    >
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen
        name="Search"
        initialParams={{
          search: "movies",
        }}
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
}

function SeasonsStackScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Movies") {
              iconName = "home";
            } else if (route.name === "Search") {
              iconName = "search";
            }
            return (
              <Ionicons
                name={iconName}
                size={30}
                color={focused ? "white" : "gray"}
              />
            );
          },
          tabBarStyle: {
            tabBarBackground: "RGB(30, 41, 59)",
            backgroundColor: "rgb(30, 41, 59)",
            borderTopColor: "rgb(30, 41, 59)",
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        };
      }}
    >
      <Tab.Screen name="Seasons" component={SeasonsScreen} />
      <Tab.Screen
        name="Search"
        initialParams={{
          search: "seasons",
        }}
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
}

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeStack" component={HomeStackScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Movies" component={MoviesStackScreen} />
        <Stack.Screen name="Seasons" component={SeasonsStackScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
