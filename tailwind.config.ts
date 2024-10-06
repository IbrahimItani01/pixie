import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor : "#FFFFFF",
        secondaryColor: "#CB6CE6",
        actionColor: "#DF5585",
        gradientFirst:"#FF5757",
        gradientSecond: "#8C52FF",
      },
    },
  },
  plugins: [],
};
export default config;
