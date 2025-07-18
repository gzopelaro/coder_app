import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStack";
import {
  PartyPopper,
  Info,
  Play,
  FileText,
  Settings,
  CheckCircle,
  Terminal,
  Code,
  Rocket,
} from "lucide-react-native";
import { ScreenNames } from "../navigation/ScreenNames";
import CodeBlock from "../components/CodeBlock";
import Section from "../components/Section";
import { theme } from "../theme";
import BackButton from "../components/BackButton";
import Hero from "../components/Hero";
import NextButton from "../components/NextButton";

type HowToRunNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.HowToRun
>;

export default function HowToRun() {
  const navigation = useNavigation<HowToRunNavigationProp>();

  const handleNavigateToBestPractices = () => {
    navigation.navigate(ScreenNames.BestPractices);
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
          title="How to Run"
          subtitle="Complete guide to initialize and run your first Coder session"
          iconComponent={Rocket}
          iconColor={theme.colors.blue[100]}
        />

        <View style={styles.content}>
          <Section
            title="Initialize Coder"
            icon={<Settings size={20} color="#3B82F6" />}
          >
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
          </Section>

          <Section
            title="Coder 'Hello World!'"
            icon={<Code size={20} color="#F59E0B" />}
          >
            <Text style={styles.bodyText}>
              Follow these steps to create a simple "Hello World" application
              using Coder CLI:
            </Text>
          </Section>

          <Section
            title="Step 1: Create a New Coder Session"
            icon={<Text style={styles.stepNumber}>1</Text>}
            iconBackgroundColor="transparent"
          >
            <Text style={styles.bodyText}>
              Execute the following command to create a new session with the
              desired name:
            </Text>
            <CodeBlock title="Create Session Command">
              {`coder new <name-of-the-section>`}
            </CodeBlock>
            <Text style={styles.exampleText}>
              Example:{" "}
              <Text style={styles.inlineCode}>coder new hello-world</Text>
            </Text>
          </Section>

          <Section
            title="Step 2: Add Content to the App"
            icon={<Text style={styles.stepNumber}>2</Text>}
            iconBackgroundColor="transparent"
          >
            <Text style={styles.bodyText}>
              Edit the file to add the following content:
            </Text>
            <CodeBlock title="Add Content Command">
              {`echo "say hello from app.py" > .coder/sessions/name-of-the-section/0002__user.md`}
            </CodeBlock>
            <View style={styles.alternativeBox}>
              <FileText size={16} color="#F59E0B" />
              <Text style={styles.alternativeText}>
                You can also write in the user.md file directly, by accessing
                the path from above and writing manually the command prompt you
                desire.
              </Text>
            </View>
          </Section>

          <Section
            title="Step 3: Run the Coder Session"
            icon={<Text style={styles.stepNumber}>3</Text>}
            iconBackgroundColor="transparent"
          >
            <Text style={styles.bodyText}>
              Execute the following command to run the Coder session:
            </Text>
            <CodeBlock title="Run Session Command">coder run</CodeBlock>
          </Section>

          <Section
            title="Step 4: Review the Assistant Result"
            icon={<Text style={styles.stepNumber}>4</Text>}
            iconBackgroundColor="transparent"
          >
            <Text style={styles.bodyText}>
              You can review the assistant's result in the file:
            </Text>
            <CodeBlock title="Assistant Result File">
              .coder/sessions/name-of-the-section/0002_assistant.md
            </CodeBlock>
            <View style={styles.infoBox}>
              <Info size={16} color="#3B82F6" />
              <Text style={styles.infoText}>
                This file contains the AI assistant's response and generated
                code based on your prompt.
              </Text>
            </View>
          </Section>

          <Section
            title="Step 5: Apply the Coder Session"
            icon={<Text style={styles.stepNumber}>5</Text>}
            iconBackgroundColor="transparent"
          >
            <Text style={styles.bodyText}>
              Execute the following command to apply the Coder session:
            </Text>
            <CodeBlock title="Apply Session Command">coder apply</CodeBlock>
            <Text style={styles.bodyText}>
              This command will implement the changes suggested by the AI
              assistant.
            </Text>
          </Section>

          <Section
            title="Step 6: Execute the Python Script"
            icon={<Text style={styles.stepNumber}>6</Text>}
            iconBackgroundColor="transparent"
          >
            <Text style={styles.bodyText}>
              Finally, run the Python script to see the output:
            </Text>
            <CodeBlock title="Execute Script Command">python app.py</CodeBlock>
          </Section>

          <Section
            title="Complete Example"
            icon={<CheckCircle size={20} color="#10B981" />}
          >
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
          </Section>

          <Section
            title="Additional Commands"
            icon={<Terminal size={20} color="#10B981" />}
          >
            <View style={styles.configSection}>
              <Text style={styles.configTitle}>List All Sessions</Text>
              <CodeBlock title="List Sessions">coder list</CodeBlock>
            </View>

            <View style={styles.configSection}>
              <Text style={styles.configTitle}>Check Session Status</Text>
              <CodeBlock title="Session Status">coder status</CodeBlock>
            </View>

            <View style={styles.configSection}>
              <Text style={styles.configTitle}>Clean Up Sessions</Text>
              <CodeBlock title="Clean Sessions">coder clean</CodeBlock>
            </View>
          </Section>

          <Section
            title="File Structure"
            icon={<FileText size={20} color="#8B5CF6" />}
          >
            <Text style={styles.bodyText}>
              After running the commands, your directory structure will look
              like:
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
          </Section>

          <Section
            title="Congratulations!"
            icon={<PartyPopper size={20} color={theme.colors.action.success} />}
          >
            <Text style={styles.bodyText}>
              By following these steps, you will have created a simple "Hello
              World" application using Coder. You're now ready to explore more
              advanced features and create complex applications.
            </Text>
          </Section>
          <NextButton
            title="Next: Best Practices"
            onClick={handleNavigateToBestPractices}
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
  exampleText: {
    fontSize: 13,
    color: "#F8F7F4",
    opacity: 0.7,
    marginTop: 8,
    marginBottom: 12,
    fontStyle: "italic",
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
  stepNumber: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F8F7F4",
    backgroundColor: "#3B82F6",
    width: 28,
    height: 28,
    borderRadius: 14,
    textAlign: "center",
    lineHeight: 28,
    overflow: "hidden",
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
});
