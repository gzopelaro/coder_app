import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Copy } from "lucide-react-native";
import * as Clipboard from "expo-clipboard";

interface CodeBlockProps {
  children: string;
  title?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, title }) => {
  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
    Alert.alert("Copied!", "Code copied to clipboard");
  };

  return (
    <View style={styles.codeContainer}>
      {title && <Text style={styles.codeTitle}>{title}</Text>}
      <View style={styles.codeBlock}>
        <Text style={styles.codeText}>{children}</Text>
        <TouchableOpacity
          style={styles.copyButton}
          onPress={() => copyToClipboard(children)}
        >
          <Copy size={14} color="#F8F7F4" />
          <Text style={styles.copyButtonText}>Copy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  codeContainer: {
    marginVertical: 8,
  },
  codeTitle: {
    fontSize: 12,
    color: "#F8F7F4",
    opacity: 0.6,
    marginBottom: 6,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  codeBlock: {
    backgroundColor: "#0D1117",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2D3748",
    position: "relative",
    overflow: "hidden",
  },
  codeText: {
    fontSize: 13,
    color: "#F8F7F4",
    fontFamily: "monospace",
    lineHeight: 20,
    padding: 16,
    paddingRight: 80,
  },
  copyButton: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#2D3748",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  copyButtonText: {
    fontSize: 12,
    color: "#F8F7F4",
    fontWeight: "600",
  },
});

export default CodeBlock;