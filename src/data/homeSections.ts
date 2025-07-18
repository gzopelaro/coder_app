import { RootStackParamList } from "../navigation/RootStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenNames } from "../navigation/ScreenNames";

export type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Home
>;

export interface SectionItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  navigateTo: keyof RootStackParamList;
}

export const homeSections: SectionItem[] = [
  {
    id: "install",
    title: "How to Install",
    subtitle: "Initial setup of Coder CLI",
    icon: "📦",
    navigateTo: ScreenNames.HowToInstall,
  },
  {
    id: "authenticate",
    title: "How to Authenticate",
    subtitle: "Configure your authentication",
    icon: "🔐",
    navigateTo: ScreenNames.HowToAuthenticate,
  },
  {
    id: "run",
    title: "How to Run",
    subtitle: "First steps and basic commands",
    icon: "🚀",
    navigateTo: ScreenNames.HowToRun,
  },
  {
    id: "best-practices",
    title: "Best Practices",
    subtitle: "Tips to optimize your workflow",
    icon: "✨",
    navigateTo: ScreenNames.BestPractices,
  },
];
