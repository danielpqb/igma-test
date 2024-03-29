import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    lineHeight: {
      xxs: "100%",
      xs: "115%",
      sm: "120%",
      md: "133%",
      lg: "150%",
      xl: "175%",
    },
    letterSpacing: {
      default: "0px",
      sm: "-1px",
      md: "-2px",
      lg: "-3px",
    },
    fontSize: {
      xxxs: "12px",
      xxs: "14px",
      xs: "16px",
      sm: "20px",
      md: "24px",
      lg: "32px",
      xl: "40px",
      xxl: "48px",
      xxxl: "64px",
      display: "80px",
      giant: "96px",
    },
    borderRadius: {
      none: "0px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      pill: "999px",
      circular: "50%",
    },
    borderWidth: {
      none: "0px",
      hairline: "1px",
      thin: "2px",
      thick: "4px",
      heavy: "8px",
    },
    spacing: {
      "inline-quarck": "4px",
      "inline-nano": "8px",
      "inline-xxxs": "16px",
      "inline-xxs": "24px",
      "inline-xs": "32px",
      "inline-sm": "40px",
      "inline-md": "48px",
      "inline-lg": "64px",
      "inline-xl": "80px",
      "stack-quarck": "4px",
      "stack-nano": "8px",
      "stack-xxxs": "16px",
      "stack-xxs": "24px",
      "stack-xs": "32px",
      "stack-sm": "40px",
      "stack-md": "48px",
      "stack-lg": "56px",
      "stack-xl": "64px",
      "stack-xxl": "80px",
      "stack-xxxl": "120px",
      "stack-huge": "160px",
      "stack-giant": "200px",
    },
    fontFamily: { base: "Plus Jakarta Sans" },
    fontWeight: {
      extrabold: "800",
      bold: "700",
      semibold: "600",
      medium: "400",
      regular: "300",
    },
    colors: {
      primary: {
        light: "#F3C96F",
        main: "#F1BC4B",
        dark: "#A88334",
        contrast: "#211E1E",
        background: "#FDF4E3",
      },
      secondary: {
        light: "#F38F6F",
        main: "#F1734B",
        dark: "#A85034",
        contrast: "#211E1E",
        background: "#FDE9E3",
      },
      tertiary: {
        light: "#9E604C",
        main: "#863920",
        dark: "#5D2716",
        contrast: "#F0EFEE",
        background: "#F4E5E1",
      },
      errors: {
        light: "#EF5350",
        main: "#D32F2F",
        dark: "#C62828",
        contrast: "#FFFFFF",
        background: "#FFDDEE",
      },
      success: {
        light: "#4CAF50",
        main: "#2E7D32",
        dark: "#1B5E20",
        contrast: "#FFFFFF",
        background: "#EDF7ED",
      },
      warning: {
        light: "#FF9800",
        main: "#ED6C02",
        dark: "#E65100",
        contrast: "#211E1E",
        background: "#FFF4E5",
      },
      info: {
        light: "#03A9F4",
        main: "#0288D1",
        dark: "#01579B",
        contrast: "#FFFFFF",
        background: "#E5F6FD",
      },
      base: {
        dark: {
          secondary: "#565454",
          main: "#333333",
          highlight: "#211E1E",
          contrast: "#FFFFFF",
          disabled: "#AEAEAE",
        },
        light: {
          secondary: "#F5F5F5",
          main: "#EDEDED",
          highlight: "#D6D5D5",
          contrast: "#FFFFFF",
        },
      },
      background: { "01": "#FFFFFF" },
    },
    screens: {
      tablet: "1024px",
      desktop: "1280px",
      "desktop-g": "1440px",
    },
  },
  plugins: [],
};
export default config;
