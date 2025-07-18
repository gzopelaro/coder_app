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
import { ScreenNames } from "./ScreenNames";

export type RootStackParamList = {
  [ScreenNames.Entry]: undefined;
  [ScreenNames.Home]: undefined;
  [ScreenNames.HowToInstall]: undefined;
  [ScreenNames.HowToAuthenticate]: undefined;
  [ScreenNames.HowToRun]: undefined;
  [ScreenNames.BestPractices]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ScreenNames.Entry}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name={ScreenNames.Entry}
            component={Entry}
            options={{ title: "Coder AI" }}
          />
          <Stack.Screen
            name={ScreenNames.Home}
            component={Home}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name={ScreenNames.HowToInstall}
            component={HowToInstall}
            options={{ title: "HowToInstall" }}
          />
          <Stack.Screen
            name={ScreenNames.HowToAuthenticate}
            component={HowToAuthenticate}
            options={{ title: "HowToAuthenticate" }}
          />
          <Stack.Screen
            name={ScreenNames.HowToRun}
            component={HowToRun}
            options={{ title: "HowToRun" }}
          />
          <Stack.Screen
            name={ScreenNames.BestPractices}
            component={BestPractices}
            options={{ title: "BestPractices" }}
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