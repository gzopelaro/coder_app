import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStack";
import * as Clipboard from "expo-clipboard";
import {
  Copy,
  ArrowLeft,
  PartyPopper,
  Info,
  Key,
  Shield,
  CheckCircle,
  ExternalLink,
} from "lucide-react-native";

type HowToAuthenticateNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "HowToAuthenticate"
>;

export default function HowToAuthenticate() {
  const navigation = useNavigation<HowToAuthenticateNavigationProp>();

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
    Alert.alert("Copied!", "Code copied to clipboard");
  };

  const CodeBlock = ({
    children,
    title,
  }: {
    children: string;
    title?: string;
  }) => (
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
        <Text style={styles.title}>How to Authenticate</Text>
        <Text style={styles.subtitle}>
          Complete guide to authenticate with the Coder CLI tool
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Key size={24} color="#F59E0B" />
            <Text style={styles.sectionTitle}>Step 1: Generate an API Key</Text>
          </View>
          <Text style={styles.bodyText}>
            Visit the Flow API Keys page to generate your API key
            (client/secret).
          </Text>
          <View style={styles.linkBox}>
            <ExternalLink size={16} color="#3B82F6" />
            <Text style={styles.linkText}>Flow API Keys</Text>
          </View>
          <View style={styles.infoBox}>
            <Info size={16} color="#3B82F6" />
            <Text style={styles.infoText}>
              You'll need both a client ID and client secret for authentication.
              Make sure to save these credentials securely.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Shield size={24} color="#10B981" />
            <Text style={styles.sectionTitle}>Step 2: Add Your Tenant</Text>
          </View>
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
              • <Text style={styles.inlineCode}>{"<your_tenant>"}</Text> - Your
              tenant name
            </Text>
            <Text style={styles.requirementText}>
              • <Text style={styles.inlineCode}>{"<your_client_id>"}</Text> -
              Your client ID from the API keys page
            </Text>
            <Text style={styles.requirementText}>
              • <Text style={styles.inlineCode}>{"<your_client_secret>"}</Text>{" "}
              - Your client secret from the API keys page
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <CheckCircle size={24} color="#10B981" />
            <Text style={styles.sectionTitle}>
              Step 3: Verify Authentication
            </Text>
          </View>
          <Text style={styles.bodyText}>
            Check if your authentication was successful by running:
          </Text>
          <CodeBlock title="Verification Command">coder auth list</CodeBlock>
          <Text style={styles.bodyText}>
            This command will show all configured tenants and indicate which one
            is currently active.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Example Usage</Text>
          </View>
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
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Additional Commands</Text>
          </View>

          <Text style={styles.subSectionTitle}>List All Tenants</Text>
          <CodeBlock title="List Tenants">coder auth list</CodeBlock>

          <Text style={styles.subSectionTitle}>Switch Active Tenant</Text>
          <CodeBlock title="Switch Tenant">
            coder auth switch --tenant {"<tenant_name>"}
          </CodeBlock>

          <Text style={styles.subSectionTitle}>Remove a Tenant</Text>
          <CodeBlock title="Remove Tenant">
            coder auth remove --tenant {"<tenant_name>"}
          </CodeBlock>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Troubleshooting</Text>
          </View>
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
        </View>

        {/* Success Message */}
        <View style={styles.successBox}>
          <View style={styles.successHeader}>
            <PartyPopper size={24} color="#10B981" />
            <Text style={styles.successTitle}>Authentication Complete!</Text>
          </View>
          <Text style={styles.successText}>
            Your Coder CLI is now authenticated and ready to use. You can start
            executing commands with your configured tenant.
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
    marginBottom: 4,
  },
  linkBox: {
    backgroundColor: "#1E293B",
    padding: 12,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: "#3B82F6",
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  linkText: {
    fontSize: 14,
    color: "#3B82F6",
    fontWeight: "600",
  },
  troubleshootingCard: {
    backgroundColor: "#1E293B",
    padding: 16,
    borderRadius: 8,
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
  codeContainer: {
    marginVertical: 8,
  },
  codeTitle: {
    fontSize: 12,
    color: "#F8F7F4",
    opacity: 0.6,
    marginBottom: 4,
    fontWeight: "600",
  },
  codeBlock: {
    backgroundColor: "#0D1117",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2D3748",
    position: "relative",
  },
  codeText: {
    fontSize: 13,
    color: "#F8F7F4",
    fontFamily: "monospace",
    lineHeight: 18,
    padding: 16,
    paddingRight: 80,
  },
  copyButton: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#2D3748",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  copyButtonText: {
    fontSize: 12,
    color: "#F8F7F4",
    fontWeight: "600",
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
