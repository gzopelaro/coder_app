import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LucideIcon } from "lucide-react-native";
import { theme } from "../theme";

type HomeSectionProps = {
  title: string;
  subtitle: string;
  iconComponent: LucideIcon;
  iconColor: string;
  onPress: () => void;
};

const HomeSection: React.FC<HomeSectionProps> = ({
  title,
  subtitle,
  iconComponent: IconComponent,
  iconColor,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.sectionCard}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.sectionIcon}>
        <IconComponent size={24} color={iconColor} />
      </View>
      <View style={styles.sectionContent}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionSubtitle}>{subtitle}</Text>
      </View>
      <View style={styles.arrow}>
        <Text style={styles.arrowText}>›</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sectionCard: {
    backgroundColor: theme.colors.background.secondary,
    borderRadius: 16,
    padding: theme.spacing.lg,
    flexDirection: "row",
    alignItems: "center",
    ...theme.shadows.lg,
    borderWidth: 1,
    borderColor: theme.colors.background.surface,
  },
  sectionIcon: {
    width: 48,
    height: 48,
    backgroundColor: theme.colors.background.surface,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: theme.spacing.md,
  },
  sectionContent: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: theme.typography.sizes.lg,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  sectionSubtitle: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.text.primary,
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
    color: theme.colors.text.primary,
    opacity: 0.6,
    fontWeight: "300",
  },
});

export default HomeSection;
