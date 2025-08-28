// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        marty: {
          bg: "#0b0c12",
          steel: "#1a1c22",
          red: "#D23B3B",
          gold: "#F5D06F",
        },
      },
      fontFamily: {
        heading: ['"Anton"', 'Impact', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "hero-texture":
          "radial-gradient(ellipse at 50% -20%, rgba(255,255,255,.06), transparent 55%)",
        "hero-texture-sm":
          "radial-gradient(ellipse at 50% 10%, rgba(255,255,255,.028), transparent 42%)",
        "marty-gradient": "linear-gradient(90deg,#6D28D9,#F5D06F)",
        "marty-steel": "linear-gradient(180deg,#1a1c22,#0b0c12)",
      },
      dropShadow: {
        glow: "0 0 10px rgba(255,255,255,.25)",
      },
      keyframes: {
        grain: {
          "0%,100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-1%,1%)" },
          "20%": { transform: "translate(1%,1%)" },
          "30%": { transform: "translate(1%,-1%)" },
          "40%": { transform: "translate(-1%,1%)" },
          "50%": { transform: "translate(-1%,0)" },
          "60%": { transform: "translate(1%,0)" },
          "70%": { transform: "translate(0,1%)" },
          "80%": { transform: "translate(0,-1%)" },
          "90%": { transform: "translate(1%,0)" },
        },
        sweep: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseSlow: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
      },
      animation: {
        grain: "grain 8s steps(6) infinite",
        sweep: "sweep 12s linear infinite",
        pulseSlow: "pulseSlow 5s ease-in-out infinite",
      },
      letterSpacing: {
        tighter: "-.03em",
      },
      lineHeight: {
        snug: "1.1",
      },
    },
  },
  plugins: [],
};

export default config;
