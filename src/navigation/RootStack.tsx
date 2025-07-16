import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import Entry from "../screens/Entry";
import Home from "../screens/Home";
import HowToRun from "../screens/HowToRun";
import HowToAuthenticate from "../screens/HowToAuthenticate";
import HowToInstall from "../screens/HowToInstall";
import BestPractices from "../screens/BestPractices";

export type RootStackParamList = {
  Entry: undefined;
  Home: undefined;
  HowToInstall: undefined;
  HowToAuthenticate: undefined;
  HowToRun: undefined;
  BestPractices: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Entry"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#101923",
            },
            headerTintColor: "#F8F7F4",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Entry"
            component={Entry}
            options={{
              title: "Coder AI",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HowToInstall"
            component={HowToInstall}
            options={{
              title: "HowToInstall",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HowToAuthenticate"
            component={HowToAuthenticate}
            options={{
              title: "HowToAuthenticate",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HowToRun"
            component={HowToRun}
            options={{
              title: "HowToRun",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="BestPractices"
            component={BestPractices}
            options={{
              title: "BestPractices",
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101923",
  },
});
