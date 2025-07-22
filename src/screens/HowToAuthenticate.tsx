import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStack";
import {
  ArrowLeft,
  PartyPopper,
  Info,
  Key,
  Shield,
  CheckCircle,
  ExternalLink,
} from "lucide-react-native";
import { ScreenNames } from "../navigation/ScreenNames";
import CodeBlock from "../components/CodeBlock";
import Section from "../components/Section";
import { theme } from "../theme";
import BackButton from "../components/BackButton";
import NextButton from "../components/NextButton";

type HowToAuthenticateNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.HowToAuthenticate
>;

export default function HowToAuthenticate() {
  const navigation = useNavigation<HowToAuthenticateNavigationProp>();

  const handleNavigateToRun = () => {
    navigation.navigate(ScreenNames.HowToRun);
  };

  const handleOpenFlowApiKeys = () => {
    Linking.openURL("https://flow.ciandt.com/settings/api-keys");
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
        <View style={styles.heroSection}>
          <View style={styles.heroIconContainer}>
            <Key size={32} color={theme.colors.action.warning} />
          </View>
          <Text style={styles.heroTitle}>How to Authenticate</Text>
          <Text style={styles.heroSubtitle}>
            Complete guide to authenticate with the Coder CLI tool
          </Text>
        </View>

        <View style={styles.content}>
          <Section
            title="Step 1: Generate an API Key"
            icon={<Key size={20} color={theme.colors.action.warning} />}
          >
            <Text style={styles.bodyText}>
              Visit the Flow API Keys page to generate your API key
              (client/secret).
            </Text>
            <TouchableOpacity
              style={styles.linkBox}
              onPress={handleOpenFlowApiKeys}
            >
              <ExternalLink size={16} color={theme.colors.action.info} />
              <Text style={styles.linkText}>Flow API Keys</Text>
            </TouchableOpacity>
            <View style={styles.infoBox}>
              <Info size={16} color={theme.colors.action.info} />
              <Text style={styles.infoText}>
                You'll need both a client ID and client secret for
                authentication. Make sure to save these credentials securely.
              </Text>
            </View>
          </Section>

          <Section
            title="Step 2: Add Your Tenant"
            icon={<Shield size={20} color={theme.colors.action.success} />}
          >
            <Text style={styles.bodyText}>
              Execute the following command to add a new tenant with its API key
              and set it as the active tenant:
            </Text>
            <CodeBlock title="Authentication Command">
              {`coder auth add --tenant <your_tenant> --client <your_client_id> --secret <your_client_secret>`}
            </CodeBlock>
            <Text style={styles.bodyText}>
              Replace the placeholders with your actual values:
            </Text>
            <View style={styles.requirementCard}>
              <Text style={styles.requirementText}>
                • <Text style={styles.inlineCode}>{"<your_tenant>"}</Text> -
                Your tenant name
              </Text>
              <Text style={styles.requirementText}>
                • <Text style={styles.inlineCode}>{"<your_client_id>"}</Text> -
                Your client ID from the API keys page
              </Text>
              <Text style={styles.requirementText}>
                •{" "}
                <Text style={styles.inlineCode}>{"<your_client_secret>"}</Text>{" "}
                - Your client secret from the API keys page
              </Text>
            </View>
          </Section>

          <Section
            title="Step 3: Verify Authentication"
            icon={<CheckCircle size={20} color={theme.colors.action.success} />}
          >
            <Text style={styles.bodyText}>
              Check if your authentication was successful by running:
            </Text>
            <CodeBlock title="Verification Command">coder auth list</CodeBlock>
            <Text style={styles.bodyText}>
              This command will show all configured tenants and indicate which
              one is currently active.
            </Text>
          </Section>

          <Section
            title="Example Usage"
            icon={<ExternalLink size={20} color="#8B5CF6" />}
          >
            <Text style={styles.bodyText}>
              Here's a complete example of how to authenticate:
            </Text>
            <CodeBlock title="Complete Example">
              {`coder auth add --tenant mycompany --client abc123def456 --secret xyz789secretkey`}
            </CodeBlock>
            <Text style={styles.exampleText}>
              Replace <Text style={styles.inlineCode}>mycompany</Text>,{" "}
              <Text style={styles.inlineCode}>abc123def456</Text>, and{" "}
              <Text style={styles.inlineCode}>xyz789secretkey</Text> with your
              actual credentials.
            </Text>
          </Section>

          <Section
            title="Additional Commands"
            icon={<Info size={20} color="#EC4899" />}
          >
            <View style={styles.configSection}>
              <Text style={styles.configTitle}>List All Tenants</Text>
              <CodeBlock title="List Tenants">coder auth list</CodeBlock>
            </View>

            <View style={styles.configSection}>
              <Text style={styles.configTitle}>Switch Active Tenant</Text>
              <CodeBlock title="Switch Tenant">
                {`coder auth switch --tenant <tenant_name>`}
              </CodeBlock>
            </View>

            <View style={styles.configSection}>
              <Text style={styles.configTitle}>Remove a Tenant</Text>
              <CodeBlock title="Remove Tenant">
                {`coder auth remove --tenant <tenant_name>`}
              </CodeBlock>
            </View>
          </Section>

          <Section
            title="Troubleshooting"
            icon={<Shield size={20} color="#F43F5E" />}
          >
            <View style={styles.troubleshootingCard}>
              <Text style={styles.troubleshootingTitle}>Common Issues:</Text>
              <Text style={styles.troubleshootingText}>
                • <Text style={styles.bold}>Invalid credentials:</Text>{" "}
                Double-check your client ID and secret
              </Text>
              <Text style={styles.troubleshootingText}>
                • <Text style={styles.bold}>Tenant not found:</Text> Verify your
                tenant name is correct
              </Text>
              <Text style={styles.troubleshootingText}>
                • <Text style={styles.bold}>Network issues:</Text> Check your
                internet connection
              </Text>
            </View>
          </Section>

          <Section
            title="Authentication Complete!"
            icon={<PartyPopper size={20} color={theme.colors.action.success} />}
          >
            <Text style={styles.requirementText}>
              Your Coder CLI is now authenticated and ready to use. You can
              start executing commands with your configured tenant.
            </Text>
          </Section>
          <NextButton title="Next: How to Run" onClick={handleNavigateToRun} />
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
    paddingBottom: theme.spacing.xxl + theme.spacing.sm,
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
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing.sm,
  },
  backButtonText: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.text.primary,
    marginLeft: theme.spacing.sm,
  },
  heroSection: {
    paddingTop: theme.spacing.xxxl,
    paddingBottom: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    alignItems: "center",
    gap: theme.spacing.md,
  },
  heroIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: `rgba(245, 158, 11, 0.2)`,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing.sm,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.text.primary,
    textAlign: "center",
  },
  heroSubtitle: {
    fontSize: theme.typography.sizes.md,
    color: theme.colors.text.primary,
    opacity: 0.7,
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: theme.spacing.xl,
  },
  titleContainer: {
    gap: 12,
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
  exampleText: {
    fontSize: theme.typography.sizes.xs + 1,
    color: theme.colors.text.primary,
    opacity: 0.7,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.sm + 4,
    fontStyle: "italic",
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
  linkBox: {
    backgroundColor: theme.colors.background.secondary,
    padding: theme.spacing.sm + 4,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.action.info,
    marginBottom: theme.spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  linkText: {
    fontSize: theme.typography.sizes.sm,
    color: theme.colors.action.info,
    fontWeight: theme.typography.weights.semibold,
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
  scrollView: {
    flex: 1,
  },
});