import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStack";
import { ScreenNames } from "../navigation/ScreenNames";

type EntryNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Entry
>;

export default function Entry() {
  const navigation = useNavigation<EntryNavigationProp>();

  const handleStartNow = () => {
    navigation.navigate(ScreenNames.Home);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require("../../assets/ciandt_logo.png")}
          style={styles.logo}
        />
      </View>
      <Text style={styles.title}>Coder AI</Text>
      <Text style={styles.subtitle}>Building your future with Coder.</Text>

      <TouchableOpacity style={styles.card} onPress={handleStartNow}>
        <Text style={styles.cardText}>Start now</Text>
      </TouchableOpacity>
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
    width: "100%",
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#1E293B",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#F8F7F4",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: "100%",
    height: "100%",
    maxHeight: 60,
    maxWidth: 80,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#F8F7F4",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#F8F7F4",
    opacity: 0.8,
  },
  card: {
    backgroundColor: "#1E293B",
    padding: 16,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    marginVertical: 20,
    shadowColor: "#F8F7F4",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 5,
  },
  cardText: {
    color: "#F8F7F4",
    fontSize: 16,
    fontWeight: "bold",
  },
});
