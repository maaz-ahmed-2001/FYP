import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlue: "#010333",
        midBlue: "#0061C2",
        darkGrey: "#7B7474",
        midGrey: "#D9D9D9",
        lightGrey: "#EFEFEF",
        midGreen: "#1ABC0C",
        midRed: "#ff0b0b",
        inputText: "#665656",
        borderGrey: "#a1a3a97a",
      },
      boxShadow: {
        lg: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
