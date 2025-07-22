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
        <BackButton onClick={() => navigation.navigate(ScreenNames.Home)} />
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
            icon={<ClipboardList size={20} color={theme.colors.action.warning} />}
          >
            <View style={styles.requirementCard}>
              <Text style={styles.requirementText}>
                • Python version 3.10 or higher
              </Text>
            </View>
          </Section>

          <Section
            title="Step 1: Install the Coder Package"
            icon={<Package size={20} color={theme.colors.action.info} />}
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
            icon={<CheckCircle size={20} color={theme.colors.action.success} />}
          >
            <Text style={styles.bodyText}>
              Check if the <Text style={styles.inlineCode}>coder</Text> command
              is available. Open a new terminal window and run:
            </Text>
            <CodeBlock title="Verification Command">coder --version</CodeBlock>
            <View style={styles.infoBox}>
              <Info size={16} color={theme.colors.action.info} />
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
                  <Grid2X2 size={16} color={theme.colors.text.primary} />
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
                  <Apple size={16} color={theme.colors.text.primary} />
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
    backgroundColor: theme.colors.background.primary,
  },
  contentContainer: {
    paddingBottom: theme.spacing.xxl * 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.background.surface,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: theme.spacing.md,
    gap: theme.spacing.xl,
  },
  bodyText: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.text.primary,
    opacity: 0.8,
    lineHeight: 22,
    marginBottom: theme.spacing.md,
  },
  inlineCode: {
    fontFamily: "monospace",
    backgroundColor: theme.colors.background.surface,
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
    fontSize: theme.typography.sizes.xs + 1,
    color: theme.colors.text.primary,
  },
  requirementCard: {
    backgroundColor: theme.colors.background.primary,
    padding: theme.spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.background.surface,
  },
  requirementText: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.text.primary,
    opacity: 0.8,
    lineHeight: 20,
  },
  platformSection: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  platformHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  platformIconBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: theme.colors.action.info,
    justifyContent: "center",
    alignItems: "center",
  },
  platformTitle: {
    fontSize: theme.typography.sizes.lg,
    fontWeight: theme.typography.weights.semibold,
    color: theme.colors.text.primary,
  },
  configSection: {
    marginBottom: theme.spacing.xl,
    paddingBottom: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.background.surface,
  },
  configTitle: {
    fontSize: theme.typography.sizes.md,
    fontWeight: theme.typography.weights.semibold,
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
  },
  exampleText: {
    fontSize: theme.typography.sizes.xs + 1,
    color: theme.colors.text.primary,
    opacity: 0.7,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.sm + 4,
    fontStyle: "italic",
  },
  infoBox: {
    backgroundColor: "#1E3A8A",
    padding: theme.spacing.md,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.action.info,
    marginTop: theme.spacing.sm,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: theme.spacing.sm + 4,
  },
  infoText: {
    fontSize: theme.typography.sizes.xs + 1,
    color: theme.colors.text.primary,
    opacity: 0.9,
    lineHeight: 20,
    flex: 1,
  },
  troubleshootingCard: {
    backgroundColor: theme.colors.background.primary,
    padding: theme.spacing.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: theme.colors.background.surface,
  },
  troubleshootingTitle: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.text.primary,
    fontWeight: theme.typography.weights.semibold,
    marginBottom: theme.spacing.sm,
  },
  troubleshootingText: {
    fontSize: theme.typography.sizes.xs + 1,
    color: theme.colors.text.primary,
    opacity: 0.8,
    lineHeight: 18,
    marginBottom: 4,
  },
  bold: {
    fontWeight: theme.typography.weights.semibold,
  },
  nextButton: {
    backgroundColor: theme.colors.action.info,
    borderRadius: 12,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing.md,
  },
  nextButtonText: {
    color: theme.colors.text.primary,
    fontSize: theme.typography.sizes.md,
    fontWeight: theme.typography.weights.semibold,
  },
});