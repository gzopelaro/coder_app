import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";

type BackButtonProps = {
  onClick?: () => void;
};

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={onClick || (() => navigation.goBack())}
      activeOpacity={0.7}
    >
      <ArrowLeft size={20} color="#F8F7F4" />
      <Text style={styles.backButtonText}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: "#F8F7F4",
    marginLeft: 8,
  },
});

export default BackButton;
