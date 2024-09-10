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
        y2kgray: "#C0C0C0",
        y2kpink: "#8F0653",
        black: "#333333",
        offwhite: "#F4F3EE",
        y2kpinkhover: "#B73A75",
      },
      animation: {
        typewriter: "typewriter 2s steps(40) 1s forwards",
        caret:
          "typewriter 2s steps(40) 1s forwards, blink 2s steps(1) infinite 2s",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
