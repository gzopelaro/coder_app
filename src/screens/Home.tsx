import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStack";

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function Home() {
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home!</Text>
      <Text style={styles.subtitle}>Você está na tela principal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101923",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F8F7F4",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#F8F7F4",
    opacity: 0.8,
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1E293B",
    padding: 16,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    shadowColor: "#F8F7F4",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonText: {
    color: "#F8F7F4",
    fontSize: 16,
    fontWeight: "bold",
  },
});
