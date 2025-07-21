import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Section from "../components/HomeSection";
import {
  homeSections,
  HomeNavigationProp,
  SectionItem,
} from "../data/homeSections";
import { theme } from "../theme";

export default function Home() {
  const navigation = useNavigation<HomeNavigationProp>();

  const renderSection = ({
    item,
    index,
  }: {
    item: SectionItem;
    index: number;
  }) => (
    <View style={index > 0 ? { marginTop: theme.spacing.md } : undefined}>
      <Section
        title={item.title}
        subtitle={item.subtitle}
        iconComponent={item.iconComponent}
        iconColor={item.iconColor}
        onPress={() => navigation.navigate(item.navigateTo)}
      />
    </View>
  );

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
        <FlatList
          data={homeSections}
          renderItem={renderSection}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
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
});
