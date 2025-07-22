import React, { useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  homeSections,
  HomeNavigationProp,
  SectionItem,
} from "../data/homeSections";
import { theme } from "../theme";
import HomeSection from "../components/HomeSection";

interface AnimatedSectionProps {
  item: SectionItem;
  index: number;
  onPress: () => void;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  item,
  index,
  onPress,
}) => {
  const itemFadeAnim = useRef(new Animated.Value(0)).current;
  const itemSlideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(itemFadeAnim, {
        toValue: 1,
        duration: 500,
        delay: 300 + index * 100,
        useNativeDriver: true,
      }),
      Animated.timing(itemSlideAnim, {
        toValue: 0,
        duration: 500,
        delay: 300 + index * 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, [itemFadeAnim, itemSlideAnim, index]);

  return (
    <Animated.View
      style={{
        margin: theme.spacing.sm,
        opacity: itemFadeAnim,
        transform: [{ translateY: itemSlideAnim }],
      }}
    >
      <HomeSection
        title={item.title}
        subtitle={item.subtitle}
        iconComponent={item.iconComponent}
        iconColor={item.iconColor}
        onPress={onPress}
      />
    </Animated.View>
  );
};

export default function Home() {
  const navigation = useNavigation<HomeNavigationProp>();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, slideAnim]);

  const renderSection = ({
    item,
    index,
  }: {
    item: SectionItem;
    index: number;
  }) => (
    <AnimatedSection
      item={item}
      index={index}
      onPress={() => navigation.navigate(item.navigateTo)}
    />
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View
        style={[
          styles.header,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.iconContainer}>
          <Image
            source={require("../../assets/ciandt_logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>Coder CLI Tutorial</Text>
        <Text style={styles.subtitle}>
          Transform your development with Coder
        </Text>
        <Text style={styles.description}>
          Optimizing time, increasing efficiency
        </Text>
      </Animated.View>

      <View style={styles.sectionsContainer}>
        <FlatList
          data={homeSections}
          renderItem={renderSection}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={styles.listContainer}
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
    padding: theme.spacing.md,
  },
  iconContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: theme.colors.background.secondary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing.lg,
    ...theme.shadows.md,
  },
  logo: {
    width: 100,
    height: 60,
  },
  header: {
    alignItems: "center",
    marginBottom: theme.spacing.xl,
    paddingTop: theme.spacing.xxl,
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
    color: theme.colors.text.secondary,
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
    width: "100%",
  },
  listContainer: {
    paddingBottom: theme.spacing.lg,
  },
});
