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
  Play,
  FileText,
  Settings,
  CheckCircle,
  Terminal,
  Code,
} from "lucide-react-native";

type HowToRunNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "HowToRun"
>;

export default function HowToRun() {
  const navigation = useNavigation<HowToRunNavigationProp>();

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
        <Text style={styles.title}>How to Run</Text>
        <Text style={styles.subtitle}>
          Complete guide to initialize and run your first Coder session
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Settings size={24} color="#3B82F6" />
            <Text style={styles.sectionTitle}>Initialize Coder</Text>
          </View>
          <Text style={styles.bodyText}>
            Run the following command in an empty directory or your project
            directory:
          </Text>
          <CodeBlock title="Initialize Command">coder init</CodeBlock>
          <View style={styles.infoBox}>
            <Info size={16} color="#3B82F6" />
            <Text style={styles.infoText}>
              This command sets up the initial configuration for your Coder
              workspace.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Code size={24} color="#F59E0B" />
            <Text style={styles.sectionTitle}>Coder "Hello World!"</Text>
          </View>
          <Text style={styles.bodyText}>
            Follow these steps to create a simple "Hello World" application
            using Coder CLI:
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.stepNumber}>1</Text>
            <Text style={styles.sectionTitle}>Create a New Coder Session</Text>
          </View>
          <Text style={styles.bodyText}>
            Execute the following command to create a new session with the
            desired name:
          </Text>
          <CodeBlock title="Create Session Command">
            coder new {"<name-of-the-section>"}
          </CodeBlock>
          <Text style={styles.exampleText}>
            Example:{" "}
            <Text style={styles.inlineCode}>coder new hello-world</Text>
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.stepNumber}>2</Text>
            <Text style={styles.sectionTitle}>Add Content to the App</Text>
          </View>
          <Text style={styles.bodyText}>
            Edit the file to add the following content:
          </Text>
          <CodeBlock title="Add Content Command">
            {`echo "say hello from app.py" > .coder/sessions/name-of-the-section/0002__user.md`}
          </CodeBlock>
          <View style={styles.alternativeBox}>
            <FileText size={16} color="#F59E0B" />
            <Text style={styles.alternativeText}>
              You can also write in the user.md file directly, by accessing the
              path from above and writing manually the command prompt you
              desire.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.stepNumber}>3</Text>
            <Text style={styles.sectionTitle}>Run the Coder Session</Text>
          </View>
          <Text style={styles.bodyText}>
            Execute the following command to run the Coder session:
          </Text>
          <CodeBlock title="Run Session Command">coder run</CodeBlock>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.stepNumber}>4</Text>
            <Text style={styles.sectionTitle}>Review the Assistant Result</Text>
          </View>
          <Text style={styles.bodyText}>
            You can review the assistant's result in the file:
          </Text>
          <CodeBlock title="Assistant Result File">
            .coder/sessions/name-of-the-section/0002_assistant.md
          </CodeBlock>
          <View style={styles.infoBox}>
            <Info size={16} color="#3B82F6" />
            <Text style={styles.infoText}>
              This file contains the AI assistant's response and generated code
              based on your prompt.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.stepNumber}>5</Text>
            <Text style={styles.sectionTitle}>Apply the Coder Session</Text>
          </View>
          <Text style={styles.bodyText}>
            Execute the following command to apply the Coder session:
          </Text>
          <CodeBlock title="Apply Session Command">coder apply</CodeBlock>
          <Text style={styles.bodyText}>
            This command will implement the changes suggested by the AI
            assistant.
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.stepNumber}>6</Text>
            <Text style={styles.sectionTitle}>Execute the Python Script</Text>
          </View>
          <Text style={styles.bodyText}>
            Finally, run the Python script to see the output:
          </Text>
          <CodeBlock title="Execute Script Command">python app.py</CodeBlock>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Complete Example</Text>
          </View>
          <Text style={styles.bodyText}>
            Here's the complete workflow in sequence:
          </Text>
          <CodeBlock title="Complete Workflow">
            {`# Initialize Coder
coder init

# Create a new session
coder new hello-world

# Add content to the session
echo "say hello from app.py" > .coder/sessions/hello-world/0002__user.md

# Run the session
coder run

# Apply the changes
coder apply

# Execute the generated script
python app.py`}
          </CodeBlock>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Terminal size={24} color="#10B981" />
            <Text style={styles.sectionTitle}>Additional Commands</Text>
          </View>

          <Text style={styles.subSectionTitle}>List All Sessions</Text>
          <CodeBlock title="List Sessions">coder list</CodeBlock>

          <Text style={styles.subSectionTitle}>Check Session Status</Text>
          <CodeBlock title="Session Status">coder status</CodeBlock>

          <Text style={styles.subSectionTitle}>Clean Up Sessions</Text>
          <CodeBlock title="Clean Sessions">coder clean</CodeBlock>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>File Structure</Text>
          </View>
          <Text style={styles.bodyText}>
            After running the commands, your directory structure will look like:
          </Text>
          <View style={styles.fileStructureBox}>
            <Text style={styles.fileStructureText}>
              {`project-directory/
├── .coder/
│   └── sessions/
│       └── hello-world/
│           ├── 0002__user.md
│           └── 0002_assistant.md
└── app.py`}
            </Text>
          </View>
        </View>

        {/* Success Message */}
        <View style={styles.successBox}>
          <View style={styles.successHeader}>
            <PartyPopper size={24} color="#10B981" />
            <Text style={styles.successTitle}>Congratulations!</Text>
          </View>
          <Text style={styles.successText}>
            By following these steps, you will have created a simple "Hello
            World" application using Coder. You're now ready to explore more
            advanced features and create complex applications.
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
  stepNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F8F7F4",
    backgroundColor: "#3B82F6",
    width: 32,
    height: 32,
    borderRadius: 16,
    textAlign: "center",
    lineHeight: 32,
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
  alternativeBox: {
    backgroundColor: "#1E293B",
    padding: 12,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: "#F59E0B",
    marginTop: 8,
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  alternativeText: {
    fontSize: 13,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 18,
    flex: 1,
  },
  fileStructureBox: {
    backgroundColor: "#0D1117",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#2D3748",
    marginTop: 8,
  },
  fileStructureText: {
    fontSize: 12,
    color: "#F8F7F4",
    fontFamily: "monospace",
    lineHeight: 16,
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
