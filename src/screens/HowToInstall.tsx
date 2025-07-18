import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStack";
import {
  ClipboardList,
  Package,
  CheckCircle,
  Settings,
  Terminal,
  PartyPopper,
  Info,
  Download,
  Apple,
  Grid2X2,
  ArrowRight,
} from "lucide-react-native";
import { ScreenNames } from "../navigation/ScreenNames";
import CodeBlock from "../components/CodeBlock";
import { theme } from "../theme";
import Section from "../components/Section";
import BackButton from "../components/BackButton";
import Hero from "../components/Hero";
import NextButton from "../components/NextButton";

type HowToInstallNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.HowToInstall
>;

export default function HowToInstall() {
  const navigation = useNavigation<HowToInstallNavigationProp>();

  const handleNavigateToAuthenticate = () => {
    navigation.navigate(ScreenNames.HowToAuthenticate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <BackButton />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Hero
          title="How to Install"
          subtitle="Complete guide to install and configure the Coder CLI tool"
          iconComponent={Download}
          iconColor={theme.colors.coral[500]}
        />

        <View style={styles.content}>
          <Section
            title="Requirements"
            icon={<ClipboardList size={20} color="#F59E0B" />}
          >
            <View style={styles.requirementCard}>
              <Text style={styles.requirementText}>
                • Python version 3.10 or higher
              </Text>
            </View>
          </Section>

          <Section
            title="Step 1: Install the Coder Package"
            icon={<Package size={20} color="#3B82F6" />}
          >
            <Text style={styles.bodyText}>
              Execute the following command in your terminal to install the
              Coder package:
            </Text>
            <CodeBlock title="Terminal Command">
              pip install
              https://storage.googleapis.com/flow-coder/flow_coder-1.4.0-py3-none-any.whl
            </CodeBlock>
          </Section>

          <Section
            title="Step 2: Verify Installation"
            icon={<CheckCircle size={20} color="#10B981" />}
          >
            <Text style={styles.bodyText}>
              Check if the <Text style={styles.inlineCode}>coder</Text> command
              is available. Open a new terminal window and run:
            </Text>
            <CodeBlock title="Verification Command">coder --version</CodeBlock>
            <View style={styles.infoBox}>
              <Info size={16} color="#3B82F6" />
              <Text style={styles.infoText}>
                If the terminal returns the Coder version, you're all set! If
                you get an error, continue with Step 3.
              </Text>
            </View>
          </Section>

          <Section
            title="Step 3: Configure PATH (If Needed)"
            icon={<Settings size={20} color="#8B5CF6" />}
          >
            <Text style={styles.bodyText}>
              If the <Text style={styles.inlineCode}>coder</Text> command is not
              recognized, add the Python scripts directory to your system's
              PATH.
            </Text>

            <View style={styles.platformSection}>
              <View style={styles.platformHeader}>
                <View style={styles.platformIconBadge}>
                  <Grid2X2 size={16} color="#F8F7F4" />
                </View>
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
                <View style={styles.platformIconBadge}>
                  <Apple size={16} color="#F8F7F4" />
                </View>
                <Text style={styles.platformTitle}>macOS & Linux Users</Text>
              </View>
              <Text style={styles.bodyText}>
                Add the Python scripts directory to your PATH by adding this
                line to your shell configuration file (
                <Text style={styles.inlineCode}>.bashrc</Text>,{" "}
                <Text style={styles.inlineCode}>.zshrc</Text>, etc.):
              </Text>
              <CodeBlock title="Unix PATH Configuration">
                export PATH="$HOME/.local/bin:$PATH"
              </CodeBlock>
            </View>
          </Section>

          <Section
            title="Advanced Configuration"
            icon={<Terminal size={20} color="#EC4899" />}
          >
            <View style={styles.configSection}>
              <Text style={styles.configTitle}>Find Python Directory</Text>
              <CodeBlock title="Locate Python">which python3</CodeBlock>
              <Text style={styles.exampleText}>
                Example output:{" "}
                <Text style={styles.inlineCode}>
                  /usr/local/Caskroom/miniconda/base/bin/python3
                </Text>
              </Text>
            </View>

            <View style={styles.configSection}>
              <Text style={styles.configTitle}>Find Packages Directory</Text>
              <CodeBlock title="Locate Site Packages">
                python3 -m site --user-site
              </CodeBlock>
              <Text style={styles.exampleText}>
                Example output:{" "}
                <Text style={styles.inlineCode}>
                  /Users/user.name/.local/lib/python3.12/site-packages
                </Text>
              </Text>
            </View>

            <View style={styles.configSection}>
              <Text style={styles.configTitle}>Find Coder Executable</Text>
              <CodeBlock title="Locate Coder">which coder</CodeBlock>
            </View>

            <View style={styles.configSection}>
              <Text style={styles.configTitle}>Edit Shell Configuration</Text>
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
            </View>

            <View style={styles.configSection}>
              <Text style={styles.configTitle}>Add to PATH</Text>
              <CodeBlock title="Add Coder to PATH">
                export PATH="/path/to/your_app:$PATH"
              </CodeBlock>
              <Text style={styles.exampleText}>
                Example:{" "}
                <Text style={styles.inlineCode}>
                  export PATH="/usr/local/Caskroom/miniconda/base/bin:$PATH"
                </Text>
              </Text>
            </View>

            <View style={styles.configSection}>
              <Text style={styles.configTitle}>Apply Changes</Text>
              <CodeBlock title="Reload Configuration">
                {`# For zsh
source ~/.zshrc

# For bash
source ~/.bashrc`}
              </CodeBlock>
            </View>
          </Section>

          <Section
            title="Installation Complete!"
            icon={<PartyPopper size={20} color={theme.colors.action.success} />}
          >
            <Text style={styles.requirementText}>
              Your Coder package is now installed and configured correctly. You
              can start using the CLI tool for your development workflow.
            </Text>
          </Section>

          <NextButton
            title="Next: How to Authenticate"
            onClick={handleNavigateToAuthenticate}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E14",
  },
  contentContainer: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#2D3748",
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 24,
  },
  bodyText: {
    fontSize: 14,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 22,
    marginBottom: 16,
  },
  inlineCode: {
    fontFamily: "monospace",
    backgroundColor: "#2D3748",
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
    fontSize: 13,
    color: "#F8F7F4",
  },
  requirementCard: {
    backgroundColor: "#0D1117",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2D3748",
  },
  requirementText: {
    fontSize: 14,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 20,
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
  platformIconBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center",
  },
  platformTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#F8F7F4",
  },
  configSection: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#2D3748",
  },
  configTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F8F7F4",
    marginBottom: 8,
  },
  exampleText: {
    fontSize: 13,
    color: "#F8F7F4",
    opacity: 0.7,
    marginTop: 8,
    marginBottom: 12,
    fontStyle: "italic",
  },
  infoBox: {
    backgroundColor: "#1E3A8A",
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#3B82F6",
    marginTop: 12,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  infoText: {
    fontSize: 13,
    color: "#F8F7F4",
    opacity: 0.9,
    lineHeight: 20,
    flex: 1,
  },
  troubleshootingCard: {
    backgroundColor: "#0D1117",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2D3748",
  },
  troubleshootingTitle: {
    fontSize: 14,
    color: "#F8F7F4",
    fontWeight: "600",
    marginBottom: 8,
  },
  troubleshootingText: {
    fontSize: 13,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 18,
    marginBottom: 4,
  },
  bold: {
    fontWeight: "600",
  },
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
