import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Section from "../components/HomeSection";
import { homeSections, HomeNavigationProp } from "../data/homeSections";
import { theme } from "../theme";

export default function Home() {
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Image
            source={require("../../assets/ciandt_logo.png")}
            style={styles.logo}
          />
        </View>
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
          <View
            key={section.id}
            style={index > 0 ? { marginTop: theme.spacing.md } : undefined}
          >
            <Section
              title={section.title}
              subtitle={section.subtitle}
              iconComponent={section.iconComponent}
              iconColor={section.iconColor}
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
    backgroundColor: theme.colors.background.primary,
  },
  contentContainer: {
    flexGrow: 1,
    padding: theme.spacing.lg,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: theme.colors.background.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing.lg,
    ...theme.shadows.lg,
  },
  logo: {
    width: "100%",
    height: "100%",
    maxHeight: 60,
    maxWidth: 80,
  },
  header: {
    alignItems: "center",
    marginBottom: theme.spacing.xl,
    paddingTop: theme.spacing.lg,
  },
  title: {
    fontSize: theme.typography.sizes.xxxl,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
    textAlign: "center",
  },
  subtitle: {
    fontSize: theme.typography.sizes.lg,
    color: theme.colors.text.primary,
    opacity: 0.9,
    marginBottom: theme.spacing.sm,
    textAlign: "center",
  },
  description: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.text.primary,
    opacity: 0.7,
    textAlign: "center",
  },
  sectionsContainer: {
    flex: 1,
  },
  footer: {
    marginTop: theme.spacing.xxxl,
    alignItems: "center",
    paddingVertical: theme.spacing.lg,
  },
  footerText: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.text.primary,
    opacity: 0.8,
    textAlign: "center",
    fontStyle: "italic",
  },
});
