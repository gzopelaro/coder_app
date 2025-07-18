import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LucideIcon } from "lucide-react-native";

type SectionProps = {
  title: string;
  subtitle: string;
  iconComponent: LucideIcon;
  iconColor: string;
  onPress: () => void;
};

const Section: React.FC<SectionProps> = ({
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
});

export default Section;
