
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { textStyles } from "./textStyles";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#F1F1F1" },
          200: { value: "#3D3659" },
          300: { value: "#255059" },
          400: { value: "#BF8339" },
          950: { value: "#A62626" },
        },
        neutral: {
          white: { value: "#FFFFFF" },
          black: { value: "#000000" },
          gray: { value: "#1A1A1A" },
        },
      },
    },

    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.300}" },
          contrast: { value: "{colors.neutral.white}" },
          emphasized: { value: "{colors.brand.400}" }, 
          focusRing: { value: "{colors.brand.400}" },
        },
        neutral: {
          fg: { value: "{colors.neutral.gray}" },
        },
      },
    },

    textStyles,
    components: {
      Button: {
        baseStyle: {
          fontFamily: "Poppins",
          fontWeight: "bold",
          borderRadius: "md",
        },
        variants: {
          solid: {
            bg: "brand.300",
            color: "neutral.white",
            _hover: {
              bg: "brand.200",
            },
          },
          outline: {
            border: "2px solid",
            borderColor: "brand.300",
            color: "brand.300",
            _hover: {
              bg: "brand.200",
            },
          },
        },
        sizes: {
          lg: {
            px: 8,
            py: 6,
            fontSize: "lg",
          },
          md: {
            px: 6,
            py: 4,
            fontSize: "md",
          },
        },
        defaultProps: {
          variant: "solid",
          size: "md",
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
