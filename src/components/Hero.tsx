import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { LucideIcon } from "lucide-react-native";

type HeroProps = {
  title: string;
  subtitle: string;
  iconComponent: LucideIcon;
  iconColor: string;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  iconComponent: IconComponent,
  iconColor,
}) => {
  // Create a background color with the same hue as iconColor but with 0.2 opacity
  const iconBackgroundColor = `${iconColor}33`; // 33 is 20% opacity in hex

  return (
    <View style={styles.heroSection}>
      <View style={[styles.heroIconContainer, { backgroundColor: iconBackgroundColor }]}>
        <IconComponent size={32} color={iconColor} />
      </View>
      <Text style={styles.heroTitle}>{title}</Text>
      <Text style={styles.heroSubtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heroSection: {
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 16,
  },
  heroIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F8F7F4",
    textAlign: "center",
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#F8F7F4",
    opacity: 0.7,
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
});

export default Hero;