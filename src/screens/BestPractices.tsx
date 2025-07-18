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
  ArrowLeft,
  PartyPopper,
  Info,
  Target,
  Users,
  MessageCircle,
  Brain,
  RefreshCw,
  AlertTriangle,
  Lightbulb,
  Code,
  Eye,
  Zap,
  Settings,
  BookOpen,
} from "lucide-react-native";
import { ScreenNames } from "../navigation/ScreenNames";
import CodeBlock from "../components/CodeBlock";

type BestPracticesNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.BestPractices
>;

export default function BestPractices() {
  const navigation = useNavigation<BestPracticesNavigationProp>();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} color="#F8F7F4" style={{ opacity: 0.8 }} />
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <View style={styles.titleRow}>
            <Lightbulb size={32} color="#F59E0B" />
            <Text style={styles.title}>Best Practices</Text>
          </View>
          <Text style={styles.subtitle}>
            Enhance your collaboration with AI for better coding outcomes
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        {/* Structured Approach */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconBadge}>
              <Target size={20} color="#3B82F6" />
            </View>
            <Text style={styles.sectionTitle}>Define Objectives Clearly</Text>
          </View>
          <Text style={styles.bodyText}>
            Before requesting the AI to make direct code changes, clearly
            explain your objectives. This helps the AI understand the context
            and requirements for the task at hand.
          </Text>

          <View style={styles.exampleBox}>
            <Text style={styles.exampleTitle}>Example Prompt</Text>
            <Text style={styles.exampleText}>
              In the context creator, I want to make it possible to specify a
              function that parses the content of the files, processes it, and
              returns the actual string that will be put in the context as the
              content of the specific file.
            </Text>
            <Text style={styles.exampleText}>
              Before generating the code, please review the solution, and then
              ask the Coder to execute (coder apply).
            </Text>
          </View>
        </View>

        {/* Review Process */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconBadge}>
              <Eye size={20} color="#10B981" />
            </View>
            <Text style={styles.sectionTitle}>
              Review the Suggested Solution
            </Text>
          </View>
          <Text style={styles.bodyText}>
            After providing the context and requirements, ask the AI to review
            the proposed solution before implementing it. This allows for
            refinement and adjustments based on feedback.
          </Text>

          <View style={styles.processCard}>
            <View style={styles.processStep}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepText}>1</Text>
              </View>
              <Text style={styles.processText}>
                Provide context and requirements
              </Text>
            </View>
            <View style={styles.processStep}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepText}>2</Text>
              </View>
              <Text style={styles.processText}>
                Request AI to review solution
              </Text>
            </View>
            <View style={styles.processStep}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepText}>3</Text>
              </View>
              <Text style={styles.processText}>Iterative refinement</Text>
            </View>
          </View>
        </View>

        {/* Iterative Refinement */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconBadge}>
              <RefreshCw size={20} color="#8B5CF6" />
            </View>
            <Text style={styles.sectionTitle}>Iterative Refinement</Text>
          </View>
          <Text style={styles.bodyText}>
            Be prepared to provide one or two additional prompts to adjust the
            solution based on the AI's review. This iterative process can lead
            to a more accurate final implementation.
          </Text>
        </View>

        {/* Session Context */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconBadge}>
              <Brain size={20} color="#F59E0B" />
            </View>
            <Text style={styles.sectionTitle}>
              Understanding Session Context
            </Text>
          </View>
          <Text style={styles.bodyText}>
            When using the <Text style={styles.inlineCode}>coder apply</Text>{" "}
            command, it's important to understand how the AI considers the
            context for future iterations:
          </Text>
          <View style={styles.infoBox}>
            <Info size={16} color="#3B82F6" />
            <Text style={styles.infoText}>
              The AI considers everything in the active session. If changes were
              made to a file, it retains the entire history of what the file was
              before the session was created and what modifications have already
              been suggested.
            </Text>
          </View>
        </View>

        {/* Personas */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconBadge}>
              <Users size={20} color="#EC4899" />
            </View>
            <Text style={styles.sectionTitle}>Usage of Personas</Text>
          </View>
          <Text style={styles.bodyText}>
            Personas are fictional characters that represent different user
            types who might interact with a system. In the context of using LLM
            agents for code generation, defining personas helps tailor
            interactions to meet specific needs.
          </Text>

          <View style={styles.practicesList}>
            <View style={styles.practiceItem}>
              <View style={styles.practiceNumber}>
                <Text style={styles.practiceText}>1</Text>
              </View>
              <View style={styles.practiceContent}>
                <Text style={styles.practiceTitle}>Identify Key Personas</Text>
                <Text style={styles.practiceDescription}>
                  Understand different stakeholders (developers, project
                  managers, testers) and create personas that reflect their
                  goals, technical expertise, and coding styles.
                </Text>
              </View>
            </View>

            <View style={styles.practiceItem}>
              <View style={styles.practiceNumber}>
                <Text style={styles.practiceText}>2</Text>
              </View>
              <View style={styles.practiceContent}>
                <Text style={styles.practiceTitle}>Customize Interactions</Text>
                <Text style={styles.practiceDescription}>
                  Use personas to guide agent interactions. Novice developers
                  might appreciate detailed explanations, while experienced
                  developers prefer concise responses.
                </Text>
              </View>
            </View>

            <View style={styles.practiceItem}>
              <View style={styles.practiceNumber}>
                <Text style={styles.practiceText}>3</Text>
              </View>
              <View style={styles.practiceContent}>
                <Text style={styles.practiceTitle}>
                  Iterate Based on Feedback
                </Text>
                <Text style={styles.practiceDescription}>
                  Continuously gather feedback from users of different personas
                  to refine their characteristics and improve interaction
                  effectiveness.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Prompts and Best Practices */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconBadge}>
              <MessageCircle size={20} color="#06B6D4" />
            </View>
            <Text style={styles.sectionTitle}>Crafting Effective Prompts</Text>
          </View>
          <Text style={styles.bodyText}>
            The quality of the output generated by an LLM agent heavily depends
            on how well the prompts are crafted. Here are some best practices:
          </Text>

          <View style={styles.promptSection}>
            <Text style={styles.promptTitle}>1. Be Specific</Text>
            <Text style={styles.promptDescription}>
              Clearly define the task and provide context. The more specific you
              are, the better the model can understand your needs.
            </Text>
            <CodeBlock title="Example Command">
              {`coder run --prompt "Generate a function that calculates the factorial of a number in Python."`}
            </CodeBlock>
          </View>

          <View style={styles.promptSection}>
            <Text style={styles.promptTitle}>2. Use Clear Language</Text>
            <Text style={styles.promptDescription}>
              Avoid jargon or ambiguous terms. Use simple and direct language to
              ensure the model comprehends your request.
            </Text>
          </View>

          <View style={styles.promptSection}>
            <Text style={styles.promptTitle}>3. Request a Review</Text>
            <Text style={styles.promptDescription}>
              Before asking for code generation, request the AI to review the
              proposed solution. This allows for refinement and ensures
              alignment with your objectives.
            </Text>
            <CodeBlock title="Example Request">
              {`Before generating the code, please review the proposed solution and let me know if there are any improvements.`}
            </CodeBlock>
          </View>

          <View style={styles.promptSection}>
            <Text style={styles.promptTitle}>4. Iterate and Refine</Text>
            <Text style={styles.promptDescription}>
              Be open to refining your prompts based on initial outputs. Use
              follow-up prompts to clarify or adjust the direction of the code
              generation.
            </Text>
          </View>
        </View>

        {/* Model Usage */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.iconBadge}>
              <Zap size={20} color="#F59E0B" />
            </View>
            <Text style={styles.sectionTitle}>Usage of Models</Text>
          </View>

          <View style={styles.modelsList}>
            <View style={styles.modelItem}>
              <Text style={styles.modelTitle}>
                Understand Model Capabilities
              </Text>
              <Text style={styles.modelDescription}>
                Different models have varying strengths. Familiarize yourself
                with the capabilities of each model available to choose one that
                best fits your needs.
              </Text>
            </View>

            <View style={styles.modelItem}>
              <Text style={styles.modelTitle}>Task Suitability</Text>
              <Text style={styles.modelDescription}>
                Choose a model that performs well for your specific coding
                task—whether it's generating new code, debugging, or
                refactoring.
              </Text>
            </View>

            <View style={styles.modelItem}>
              <Text style={styles.modelTitle}>Resource Considerations</Text>
              <Text style={styles.modelDescription}>
                Consider computational resources required. Some models may
                require more powerful hardware, impacting performance and
                response times.
              </Text>
            </View>
          </View>
        </View>

        {/* Important Warning */}
        <View style={styles.warningSection}>
          <View style={styles.warningHeader}>
            <AlertTriangle size={24} color="#F59E0B" />
            <Text style={styles.warningTitle}>
              Important: Context Management
            </Text>
          </View>
          <Text style={styles.warningText}>
            Every time you have a session open and make a manual change to your
            code, you need to run the{" "}
            <Text style={styles.inlineCode}>coder init</Text> or{" "}
            <Text style={styles.inlineCode}>coder reset</Text> command.
          </Text>
          <Text style={styles.warningText}>
            If you run <Text style={styles.inlineCode}>coder apply</Text> after
            modifying something in your code, the previous context that the
            session had will not take into account your new code, so you have to
            process that new context using the Init or Reset commands or else
            your new code will be discarded by the old context.
          </Text>
          <CodeBlock title="Context Reset Commands">
            {`# Reset context after manual changes
coder init
# or
coder reset`}
          </CodeBlock>
        </View>

        {/* Success Message */}
        <View style={styles.successBox}>
          <View style={styles.successHeader}>
            <View style={styles.successIconBadge}>
              <PartyPopper size={24} color="#10B981" />
            </View>
            <Text style={styles.successTitle}>Ready to Excel!</Text>
          </View>
          <Text style={styles.successText}>
            By following these best practices, you can maximize the
            effectiveness of LLM agents for code generation, leading to more
            efficient and high-quality coding outcomes.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0E14",
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    marginBottom: 32,
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: "#F8F7F4",
    opacity: 0.8,
    fontWeight: "500",
  },
  titleContainer: {
    gap: 12,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F8F7F4",
  },
  subtitle: {
    fontSize: 16,
    color: "#F8F7F4",
    opacity: 0.7,
    lineHeight: 24,
    marginLeft: 48,
  },
  content: {
    flex: 1,
    gap: 24,
  },
  section: {
    backgroundColor: "#1A1F2E",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#2D3748",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  iconBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#2D3748",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F8F7F4",
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
  exampleBox: {
    backgroundColor: "#0D1117",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2D3748",
    marginTop: 8,
  },
  exampleTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#F59E0B",
    marginBottom: 8,
  },
  exampleText: {
    fontSize: 13,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 20,
    marginBottom: 8,
  },
  processCard: {
    backgroundColor: "#0D1117",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2D3748",
    gap: 12,
  },
  processStep: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#10B981",
    justifyContent: "center",
    alignItems: "center",
  },
  stepText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  processText: {
    fontSize: 14,
    color: "#F8F7F4",
    opacity: 0.8,
    flex: 1,
  },
  practicesList: {
    gap: 16,
  },
  practiceItem: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  practiceNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#EC4899",
    justifyContent: "center",
    alignItems: "center",
  },
  practiceText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  practiceContent: {
    flex: 1,
  },
  practiceTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#F8F7F4",
    marginBottom: 4,
  },
  practiceDescription: {
    fontSize: 13,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 20,
  },
  promptSection: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#2D3748",
  },
  promptTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F8F7F4",
    marginBottom: 8,
  },
  promptDescription: {
    fontSize: 14,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 20,
    marginBottom: 12,
  },
  modelsList: {
    gap: 16,
  },
  modelItem: {
    backgroundColor: "#0D1117",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2D3748",
  },
  modelTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#F8F7F4",
    marginBottom: 8,
  },
  modelDescription: {
    fontSize: 13,
    color: "#F8F7F4",
    opacity: 0.8,
    lineHeight: 20,
  },
  warningSection: {
    backgroundColor: "#1A1F2E",
    borderRadius: 16,
    padding: 20,
    borderWidth: 2,
    borderColor: "#F59E0B",
  },
  warningHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F59E0B",
  },
  warningText: {
    fontSize: 14,
    color: "#F8F7F4",
    opacity: 0.9,
    lineHeight: 22,
    marginBottom: 12,
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
  successBox: {
    backgroundColor: "#1E293B",
    padding: 24,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#10B981",
    marginTop: 8,
  },
  successHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginBottom: 12,
  },
  successIconBadge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#10B981",
    justifyContent: "center",
    alignItems: "center",
  },
  successTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#10B981",
  },
  successText: {
    fontSize: 14,
    color: "#F8F7F4",
    opacity: 0.9,
    lineHeight: 22,
    marginLeft: 64,
  },
});