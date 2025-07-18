import { ArrowRight } from "lucide-react-native";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type NextButtonProps = {
  title: string;
  onClick: () => void;
};

const NextButton = ({ title, onClick }: NextButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.nextButton}
      onPress={onClick}
      activeOpacity={0.8}
    >
      <Text style={styles.nextButtonText}>{title}</Text>
      <ArrowRight size={20} color="#F8F7F4" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  nextButton: {
    backgroundColor: "#3B82F6",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  nextButtonText: {
    color: "#F8F7F4",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default NextButton;
