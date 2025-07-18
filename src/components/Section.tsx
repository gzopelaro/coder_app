import React, { ReactNode } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { LucideIcon } from "lucide-react-native";

interface SectionProps {
  title: string;
  icon?: ReactNode;
  iconColor?: string;
  iconBackgroundColor?: string;
  children: ReactNode;
  style?: ViewStyle;
}

const Section: React.FC<SectionProps> = ({
  title,
  icon,
  iconColor = "#F8F7F4",
  iconBackgroundColor = "#2D3748",
  children,
  style,
}) => {
  return (
    <View style={[styles.section, style]}>
      <View style={styles.sectionHeader}>
        {icon && (
          <View
            style={[styles.iconBadge, { backgroundColor: iconBackgroundColor }]}
          >
            {icon}
          </View>
        )}
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      <View style={styles.sectionContent}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    backgroundColor: "#1A1F2E",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#2D3748",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8F7F4",
    maxWidth: 260,
  },
  sectionContent: {},
});

export default Section;
