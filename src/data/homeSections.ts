import { RootStackParamList } from "../navigation/RootStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenNames } from "../navigation/ScreenNames";
import React, { ReactNode } from "react";
import {
  Package,
  Key,
  Rocket,
  Sparkles,
  LucideIcon,
  Download,
  Play,
  Lightbulb,
} from "lucide-react-native";
import { colors } from "../theme/colors";

export type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  ScreenNames.Home
>;

export interface SectionItem {
  id: string;
  title: string;
  subtitle: string;
  iconComponent: LucideIcon;
  iconColor: string;
  navigateTo: keyof RootStackParamList;
}

export const getHomeSections = (): SectionItem[] => [
  {
    id: "install",
    title: "How to Install",
    subtitle: "Initial setup of Coder CLI",
    iconComponent: Download,
    iconColor: colors.coral[500],
    navigateTo: ScreenNames.HowToInstall,
  },
  {
    id: "authenticate",
    title: "How to Authenticate",
    subtitle: "Configure your authentication",
    iconComponent: Key,
    iconColor: colors.action.warning,
    navigateTo: ScreenNames.HowToAuthenticate,
  },
  {
    id: "run",
    title: "How to Run",
    subtitle: "First steps and basic commands",
    iconComponent: Rocket,
    iconColor: colors.blue[100],
    navigateTo: ScreenNames.HowToRun,
  },
  {
    id: "best-practices",
    title: "Best Practices",
    subtitle: "Tips to optimize your workflow",
    iconComponent: Lightbulb,
    iconColor: colors.accent.softPink,
    navigateTo: ScreenNames.BestPractices,
  },
];

export const homeSections = getHomeSections();
