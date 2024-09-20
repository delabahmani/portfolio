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
        y2kaccent: "#dd99bb",
      },
      animation: {
        typewriter: "typewriter 2s steps(40) 1s forwards",
        caret: "typewriter 2s steps(40) 1s forwards, blink 0.7s steps(1) infinite 2s",
        "text-reveal": "text-reveal 0.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s forwards",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%, 100%": {
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
        },
        "text-reveal": {
          "0%": {
            transform: "translateY(100%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-9deg)' },
          '50%': { transform: 'rotate(9deg)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
