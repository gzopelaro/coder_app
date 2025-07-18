import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStack";
import {
  ClipboardList,
  Package,
  CheckCircle,
  Settings,
  Monitor,
  Smartphone,
  ArrowLeft,
  PartyPopper,
  Info,
  Terminal,
} from "lucide-react-native";
import { ScreenNames } from "../navigation/ScreenNames";
import CodeBlock from "../components/CodeBlock";

type HowToInstallNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.HowToInstall
>;

export default function HowToInstall() {
  const navigation = useNavigation<HowToInstallNavigationProp>();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={20} color="#F8F7F4" style={{ opacity: 0.8 }} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>How to Install</Text>
        <Text style={styles.subtitle}>
          Complete guide to install and configure the Coder CLI tool
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Requirements</Text>
          </View>
          <View style={styles.requirementCard}>
            <Text style={styles.requirementText}>
              • Python version 3.10 or higher
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Step 1: Install the Coder Package
            </Text>
          </View>
          <Text style={styles.bodyText}>
            Execute the following command in your terminal to install the Coder
            package:
          </Text>
          <CodeBlock title="Terminal Command">
            pip install
            https://storage.googleapis.com/flow-coder/flow_coder-1.4.0-py3-none-any.whl
          </CodeBlock>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Step 2: Verify Installation</Text>
          </View>
          <Text style={styles.bodyText}>
            Check if the <Text style={styles.inlineCode}>coder</Text> command is
            available. Open a new terminal window and run:
          </Text>
          <CodeBlock title="Verification Command">coder --version</CodeBlock>
          <View style={styles.infoBox}>
            <Info size={16} color="#3B82F6" />
            <Text style={styles.infoText}>
              If the terminal returns the Coder version, you're all set! If you
              get an error, continue with Step 3.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Step 3: Configure PATH (If Needed)
            </Text>
          </View>
          <Text style={styles.bodyText}>
            If the <Text style={styles.inlineCode}>coder</Text> command is not
            recognized, add the Python scripts directory to your system's PATH.
          </Text>

          <View style={styles.platformSection}>
            <View style={styles.platformHeader}>
              <Text style={styles.platformTitle}>Windows Users</Text>
            </View>
            <Text style={styles.bodyText}>
              Open Command Prompt and execute the command for your Python
              version:
            </Text>
            <CodeBlock title="Windows PATH Configuration">
              {`:: For Python 3.13
set PATH=%PATH%;%HOMEPATH%\\AppData\\Roaming\\Python\\Python313\\Scripts

:: For Python 3.12
set PATH=%PATH%;%HOMEPATH%\\AppData\\Roaming\\Python\\Python312\\Scripts

:: For Python 3.11
set PATH=%PATH%;%HOMEPATH%\\AppData\\Roaming\\Python\\Python311\\Scripts

:: For Python 3.10
set PATH=%PATH%;%HOMEPATH%\\AppData\\Roaming\\Python\\Python310\\Scripts`}
            </CodeBlock>
          </View>

          <View style={styles.platformSection}>
            <View style={styles.platformHeader}>
              <Text style={styles.platformTitle}>macOS & Linux Users</Text>
            </View>
            <Text style={styles.bodyText}>
              Add the Python scripts directory to your PATH by adding this line
              to your shell configuration file (
              <Text style={styles.inlineCode}>.bashrc</Text>,{" "}
              <Text style={styles.inlineCode}>.zshrc</Text>, etc.):
            </Text>
            <CodeBlock title="Unix PATH Configuration">
              export PATH="$HOME/.local/bin:$PATH"
            </CodeBlock>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Advanced Configuration</Text>
          </View>

          <Text style={styles.subSectionTitle}>Find Python Directory</Text>
          <CodeBlock title="Locate Python">which python3</CodeBlock>
          <Text style={styles.exampleText}>
            Example output:{" "}
            <Text style={styles.inlineCode}>
              /usr/local/Caskroom/miniconda/base/bin/python3
            </Text>
          </Text>

          <Text style={styles.subSectionTitle}>Find Packages Directory</Text>
          <CodeBlock title="Locate Site Packages">
            python3 -m site --user-site
          </CodeBlock>
          <Text style={styles.exampleText}>
            Example output:{" "}
            <Text style={styles.inlineCode}>
              /Users/user.name/.local/lib/python3.12/site-packages
            </Text>
          </Text>

          <Text style={styles.subSectionTitle}>Find Coder Executable</Text>
          <CodeBlock title="Locate Coder">which coder</CodeBlock>

          <Text style={styles.subSectionTitle}>Edit Shell Configuration</Text>
          <Text style={styles.bodyText}>
            Open your shell configuration file:
          </Text>
          <CodeBlock title="Edit Configuration Files">
            {`# For zsh users
nano ~/.zshrc
# or
code ~/.zshrc

# For bash users  
nano ~/.bashrc
# or
code ~/.bashrc`}
          </CodeBlock>

          <Text style={styles.subSectionTitle}>Add to PATH</Text>
          <CodeBlock title="Add Coder to PATH">
            export PATH="/path/to/your_app:$PATH"
          </CodeBlock>
          <Text style={styles.exampleText}>
            Example:{" "}
            <Text style={styles.inlineCode}>
              export PATH="/usr/local/Caskroom/miniconda/base/bin:$PATH"
            </Text>
          </Text>

          <Text style={styles.subSectionTitle}>Apply Changes</Text>
          <CodeBlock title="Reload Configuration">
            {`# For zsh
source ~/.zshrc

# For bash
source ~/.bashrc`}
          </CodeBlock>
        </View>

        {/* Success Message */}
        <View style={styles.successBox}>
          <View style={styles.successHeader}>
            <PartyPopper size={24} color="#10B981" />
            <Text style={styles.successTitle}>Installation Complete!</Text>
          </View>
          <Text style={styles.successText}>
            Your Coder package is now installed and configured correctly. You
            can start using the CLI tool for your development workflow.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101923",
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    marginBottom: 30,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: "#F8F7F4",
    opacity: 0.8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F8F7F4",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 22,
  },
  content: {
    flex: 1,
  },
  section: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8F7F4",
  },
  subSectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F8F7F4",
    marginTop: 20,
    marginBottom: 8,
  },
  platformSection: {
    marginTop: 16,
    marginBottom: 16,
  },
  platformHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  platformTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#F8F7F4",
  },
  bodyText: {
    fontSize: 14,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 20,
    marginBottom: 12,
  },
  exampleText: {
    fontSize: 13,
    color: "#F8F7F4",
    opacity: 0.7,
    marginBottom: 12,
    fontStyle: "italic",
  },
  inlineCode: {
    fontFamily: "monospace",
    backgroundColor: "#0D1117",
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    fontSize: 13,
  },
  requirementCard: {
    backgroundColor: "#1E293B",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2D3748",
  },
  requirementText: {
    fontSize: 14,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 20,
  },
  infoBox: {
    backgroundColor: "#1E293B",
    padding: 12,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: "#3B82F6",
    marginTop: 8,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  infoText: {
    fontSize: 13,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 18,
    flex: 1,
  },
  successBox: {
    backgroundColor: "#1E293B",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#10B981",
    marginTop: 20,
  },
  successHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  successTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#10B981",
  },
  successText: {
    fontSize: 14,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 20,
  },
});