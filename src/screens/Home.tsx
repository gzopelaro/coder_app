import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStack";

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function Home() {
  const navigation = useNavigation<HomeNavigationProp>();

  const sections = [
    {
      id: "install",
      title: "How to Install",
      subtitle: "Initial setup of Coder CLI",
      icon: "📦",
      onPress: () => navigation.navigate("HowToInstall"),
    },
    {
      id: "authenticate",
      title: "How to Authenticate",
      subtitle: "Configure your authentication",
      icon: "🔐",
      onPress: () => navigation.navigate("HowToAuthenticate"),
    },
    {
      id: "run",
      title: "How to Run",
      subtitle: "First steps and basic commands",
      icon: "🚀",
      onPress: () => navigation.navigate("HowToRun"),
    },
    {
      id: "best-practices",
      title: "Best Practices",
      subtitle: "Tips to optimize your workflow",
      icon: "✨",
      onPress: () => navigation.navigate("BestPractices"),
    },
  ];

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
        {sections.map((section, index) => (
          <TouchableOpacity
            key={section.id}
            style={[styles.sectionCard, { marginTop: index === 0 ? 0 : 16 }]}
            onPress={section.onPress}
            activeOpacity={0.8}
          >
            <View style={styles.sectionIcon}>
              <Text style={styles.iconText}>{section.icon}</Text>
            </View>
            <View style={styles.sectionContent}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionSubtitle}>{section.subtitle}</Text>
            </View>
            <View style={styles.arrow}>
              <Text style={styles.arrowText}>›</Text>
            </View>
          </TouchableOpacity>
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
  sectionCard: {
    backgroundColor: "#1E293B",
    borderRadius: 16,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#F8F7F4",
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 8,
    borderWidth: 1,
    borderColor: "#2D3748",
  },
  sectionIcon: {
    width: 48,
    height: 48,
    backgroundColor: "#2D3748",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  iconText: {
    fontSize: 20,
  },
  sectionContent: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F8F7F4",
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#F8F7F4",
    opacity: 0.7,
    lineHeight: 18,
  },
  arrow: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowText: {
    fontSize: 24,
    color: "#F8F7F4",
    opacity: 0.6,
    fontWeight: "300",
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
