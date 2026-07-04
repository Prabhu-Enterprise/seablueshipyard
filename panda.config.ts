import { defineConfig, defineRecipe } from "@pandacss/dev";

const buttonRecipe = defineRecipe({
  className: "button",
  description: "A clickable button",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    fontWeight: "600",
    borderRadius: "sm",
    cursor: "pointer",
    transition: "background 0.15s ease, color 0.15s ease, border-color 0.15s ease",
    textAlign: "center",
    lineHeight: "1.2",
  },
  variants: {
    visual: {
      solid: {
        bg: "brand.gold",
        color: "brand.navyDark",
        _hover: { bg: "brand.goldDark" },
      },
      outline: {
        bg: "transparent",
        color: "white",
        border: "2px solid",
        borderColor: "white",
        _hover: { bg: "white", color: "brand.navyDark" },
      },
      ghost: {
        bg: "transparent",
        color: "brand.navy",
        border: "2px solid",
        borderColor: "brand.navy",
        _hover: { bg: "brand.navy", color: "white" },
      },
    },
    size: {
      md: { px: "5", py: "3", fontSize: "sm" },
      lg: { px: "7", py: "4", fontSize: "md" },
    },
  },
  defaultVariants: {
    visual: "solid",
    size: "md",
  },
});

const cardRecipe = defineRecipe({
  className: "card",
  description: "Content card",
  base: {
    bg: "white",
    borderRadius: "md",
    boxShadow: "sm",
    border: "1px solid",
    borderColor: "gray.200",
    overflow: "hidden",
  },
});

export default defineConfig({
  preflight: true,

  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],

  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            navy: { value: "#0B3D66" },
            navyDark: { value: "#062843" },
            blue: { value: "#1C7FC4" },
            blueLight: { value: "#EAF3FB" },
            gold: { value: "#E8B93F" },
            goldDark: { value: "#C79A26" },
          },
        },
        fonts: {
          heading: { value: "var(--font-heading), Georgia, serif" },
          body: { value: "var(--font-body), Arial, Helvetica, sans-serif" },
        },
      },
      semanticTokens: {
        colors: {
          fg: { value: "{colors.gray.800}" },
          muted: { value: "{colors.gray.600}" },
        },
      },
      recipes: {
        button: buttonRecipe,
        card: cardRecipe,
      },
      slotRecipes: {},
    },
  },

  staticCss: {
    recipes: {
      button: [{ visual: ["solid", "outline", "ghost"], size: ["md", "lg"] }],
    },
  },

  outdir: "styled-system",
});
