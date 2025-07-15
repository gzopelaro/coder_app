import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{"</>"}</Text>
        <Image src="../../assets/ciandt_logo.png" />
      </View>
      <Text style={styles.title}>Coder AI</Text>
      <Text style={styles.subtitle}>Building your future with Coder.</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Start now</Text>
      </View>
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
    width: 80,
    height: 80,
    borderRadius: 40,
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
  icon: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F8F7F4",
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
