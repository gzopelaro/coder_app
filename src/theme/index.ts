import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";
import { shadows } from "./shadows";

export const theme = {
  colors,
  spacing,
  typography,
  shadows,

  components: {
    button: {
      primary: {
        backgroundColor: colors.primary,
        color: colors.text.primary,
        borderRadius: 10,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        ...shadows.md,
      },
      secondary: {
        backgroundColor: colors.background.surface,
        color: colors.text.primary,
        borderRadius: 10,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        ...shadows.sm,
      },
      accent: {
        backgroundColor: colors.accent.deepRed,
        color: colors.white,
        borderRadius: 10,
        paddingVertical: spacing.md,
        paddingHorizontal: spacing.lg,
        ...shadows.md,
      },
    },

    card: {
      default: {
        backgroundColor: colors.background.card,
        borderRadius: 12,
        padding: spacing.lg,
        ...shadows.md,
      },
      elevated: {
        backgroundColor: colors.background.surface,
        borderRadius: 12,
        padding: spacing.lg,
        ...shadows.lg,
      },
    },

    container: {
      screen: {
        flex: 1,
        backgroundColor: colors.background.primary,
        padding: spacing.lg,
      },
      centered: {
        flex: 1,
        backgroundColor: colors.background.primary,
        alignItems: "center" as const,
        justifyContent: "center" as const,
        padding: spacing.lg,
      },
    },
  },
} as const;

export { colors, spacing, typography, shadows };
export type Theme = typeof theme;
export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type Typography = typeof typography;
export type Shadows = typeof shadows;
