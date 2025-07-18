import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/RootStack";
import {
  PartyPopper,
  Info,
  Lightbulb,
  MessageSquare,
  FileCode,
  AlertTriangle,
  Zap,
  BookOpen,
} from "lucide-react-native";
import { ScreenNames } from "../navigation/ScreenNames";
import CodeBlock from "../components/CodeBlock";
import Section from "../components/Section";
import { theme } from "../theme";
import BackButton from "../components/BackButton";
import Hero from "../components/Hero";

type BestPracticesNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.BestPractices
>;

export default function BestPractices() {
  const navigation = useNavigation<BestPracticesNavigationProp>();

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
          title="Best Practices"
          subtitle="Tips and guidelines for getting the most out of Coder CLI"
          iconComponent={Lightbulb}
          iconColor={theme.colors.action.warning}
        />

        <View style={styles.content}>
          <Section
            title="Writing Effective Prompts"
            icon={<MessageSquare size={20} color="#3B82F6" />}
          >
            <Text style={styles.bodyText}>
              Clear and specific prompts lead to better results. Follow these
              guidelines:
            </Text>
            <View style={styles.requirementCard}>
              <Text style={styles.requirementText}>
                • Be specific about what you want to achieve
              </Text>
              <Text style={styles.requirementText}>
                • Provide context about your project
              </Text>
              <Text style={styles.requirementText}>
                • Specify programming language and frameworks
              </Text>
              <Text style={styles.requirementText}>
                • Break complex tasks into smaller steps
              </Text>
            </View>
            <Text style={styles.bodyText}>Example of a good prompt:</Text>
            <CodeBlock title="Good Prompt Example">
              {`Create a Python function that reads a CSV file named 'data.csv', filters rows where the 'status' column equals 'active', and writes the filtered data to a new file called 'active_data.csv'. Use the pandas library.`}
            </CodeBlock>
          </Section>

          <Section
            title="Session Management"
            icon={<FileCode size={20} color="#8B5CF6" />}
          >
            <Text style={styles.bodyText}>
              Organize your work into logical sessions for better management:
            </Text>
            <View style={styles.configSection}>
              <Text style={styles.configTitle}>Create Focused Sessions</Text>
              <Text style={styles.bodyText}>
                Create separate sessions for different features or components.
              </Text>
              <CodeBlock title="Session Creation">
                {`# Create a session for user authentication
coder new auth-feature

# Create a session for data processing
coder new data-processor`}
              </CodeBlock>
            </View>

            <View style={styles.configSection}>
              <Text style={styles.configTitle}>Review Before Applying</Text>
              <Text style={styles.bodyText}>
                Always review the assistant's output before applying changes:
              </Text>
              <CodeBlock title="Review Process">
                {`# Run the session
coder run

# Review the output in .coder/sessions/session-name/xxxx_assistant.md

# Apply changes only after review
coder apply`}
              </CodeBlock>
            </View>
          </Section>

          <Section
            title="Iterative Development"
            icon={<Zap size={20} color="#EC4899" />}
          >
            <Text style={styles.bodyText}>
              Use Coder in an iterative manner to refine your code:
            </Text>
            <View style={styles.alternativeBox}>
              <Info size={16} color="#3B82F6" />
              <Text style={styles.alternativeText}>
                Start with a basic implementation, then create new sessions to
                refine and improve your code.
              </Text>
            </View>
            <Text style={styles.bodyText}>Example workflow:</Text>
            <View style={styles.fileStructureBox}>
              <Text style={styles.fileStructureText}>
                {`1. Create initial implementation
2. Test and identify issues
3. Create a new session for improvements
4. Apply changes and test again
5. Repeat as needed`}
              </Text>
            </View>
          </Section>

          <Section
            title="Common Pitfalls to Avoid"
            icon={<AlertTriangle size={20} color="#F43F5E" />}
          >
            <View style={styles.troubleshootingCard}>
              <Text style={styles.troubleshootingTitle}>
                Avoid These Mistakes:
              </Text>
              <Text style={styles.troubleshootingText}>
                • <Text style={styles.bold}>Vague prompts:</Text> "Make my code
                better" is too general
              </Text>
              <Text style={styles.troubleshootingText}>
                • <Text style={styles.bold}>Applying without review:</Text>{" "}
                Always check generated code
              </Text>
              <Text style={styles.troubleshootingText}>
                • <Text style={styles.bold}>Ignoring error messages:</Text> They
                contain valuable information
              </Text>
              <Text style={styles.troubleshootingText}>
                • <Text style={styles.bold}>Overcomplicating requests:</Text>{" "}
                Break complex tasks into smaller ones
              </Text>
            </View>
          </Section>

          <Section
            title="Documentation and Comments"
            icon={<BookOpen size={20} color="#10B981" />}
          >
            <Text style={styles.bodyText}>
              Ask Coder to include documentation and comments in generated code:
            </Text>
            <CodeBlock title="Documentation Request">
              {`Create a Python function to process user data. Include docstrings and comments explaining the logic.`}
            </CodeBlock>
            <View style={styles.infoBox}>
              <Info size={16} color="#3B82F6" />
              <Text style={styles.infoText}>
                Well-documented code is easier to maintain and understand,
                especially when working in teams.
              </Text>
            </View>
          </Section>

          <Section
            title="Happy Coding!"
            icon={<PartyPopper size={20} color={theme.colors.action.success} />}
          >
            <Text style={styles.requirementText}>
              By following these best practices, you'll get the most out of the
              Coder CLI tool and improve your development workflow.
            </Text>
          </Section>
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
  requirementCard: {
    backgroundColor: "#0D1117",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2D3748",
    marginBottom: 16,
  },
  requirementText: {
    fontSize: 14,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 20,
    marginBottom: 4,
  },
  alternativeBox: {
    backgroundColor: "#1E293B",
    padding: 12,
    borderRadius: 6,
    borderLeftWidth: 3,
    borderLeftColor: "#3B82F6",
    marginBottom: 16,
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
});
