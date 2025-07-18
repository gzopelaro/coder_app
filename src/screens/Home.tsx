import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Section from "../components/Section";
import { homeSections, HomeNavigationProp } from "../data/homeSections";

export default function Home() {
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Coder CLI Tutorial</Text>
        <Text style={styles.subtitle}>
          Transform your development with Coder
        </Text>
        <Text style={styles.description}>
          Optimizing time, increasing efficiency
        </Text>
      </View>

      <View style={styles.sectionsContainer}>
        {homeSections.map((section, index) => (
          <View key={section.id} style={index > 0 ? { marginTop: 16 } : undefined}>
            <Section
              title={section.title}
              subtitle={section.subtitle}
              icon={section.icon}
              onPress={() => navigation.navigate(section.navigateTo)}
            />
          </View>
        ))}
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Ready to start your journey with Coder CLI?
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101923",
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
    paddingTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F8F7F4",
    marginBottom: 6,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#F8F7F4",
    opacity: 0.9,
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#F8F7F4",
    opacity: 0.7,
    textAlign: "center",
  },
  sectionsContainer: {
    flex: 1,
  },
  footer: {
    marginTop: 40,
    alignItems: "center",
    paddingVertical: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#F8F7F4",
    opacity: 0.8,
    textAlign: "center",
    fontStyle: "italic",
  },
});