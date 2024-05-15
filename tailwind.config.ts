import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "orange" : "#ff7d1a",
      "pale-orange" : "#ffede0",
      "very-dark-blue" : "#1d2025",
      "dark-grayish-blue" : "#68707d",
      "grayish-blue" : "#b6bcc8",
      "ligth-grayish-blue" : "#f7f8fd",
      "shadow" : "#000000bf",
      "white" : "#fff"
    },
  },
  plugins: [],
};
export default config;
