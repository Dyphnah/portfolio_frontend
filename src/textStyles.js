import { defineTextStyles } from "@chakra-ui/react"

export const textStyles = defineTextStyles({
  body: {
    description: "Body font - used in paragraphs",
    value: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "400",
      fontSize: { base: "xs", md: "sm", lg: "md" },
      lineHeight: "24px",
      letterSpacing: "0",
      textDecoration: "none",
      textTransform: "none",
        color: "{colors.neutral.gray}",
      marginBottom: "16px",
    },
  },

  h1: {
    description: "Heading font",
    value: {
      fontFamily: "Playfair Display, serif",
      fontWeight: "800",
      fontSize: { base: "2xl", md: "4xl", lg: "7xl" },
      lineHeight: "short",
      color: "neutral.white",
      marginBottom: "20px",
      marginTop: "10px",
    },
    
  },

  h2: {
    description: "Secondary heading font",
    value: {
      fontFamily: "Playfair Display, serif",
      fontWeight: "700",
      fontSize: { base: "xl", md: "2xl", lg: "5xl" },
      lineHeight: "short",
      color: "{colors.brand.300}",
      marginBottom: "40px",
      marginTop: "30px",
    },
  },

  h3: {
    description: "Other heading style",
    value: {
      fontFamily: "Playfair Display, serif",
      fontWeight: "700",
      fontSize: { base: "xl", md: "2xl", lg: "3xl" },
      lineHeight: "short",
      color: "{colors.brand.400}",
      marginBottom: "40px",
      marginTop: "20px",
    },
  },
  h4: {
    description: "Small heading style",
    value: {
      fontFamily: "Playfair Display, serif",
      fontWeight: "700",
      fontSize: { base: "xl", md: "2xl", lg: "3xl" },
      lineHeight: "short",
      color: "{colors.neutral.white}",
      marginBottom: "40px",
      marginTop: "20px",
    },
  },
})
