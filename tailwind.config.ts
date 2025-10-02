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
          purple: "#8c00ff",
          cyan: "#00ffe1",
        },
      },
      fontFamily: {
        heading: ['"Anton"', 'Impact', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "hero-texture": "none",
        "hero-texture-sm": "none",
        "marty-gradient": "linear-gradient(135deg, #0b0c12 0%, #1a1c22 100%)",
        "marty-steel": "linear-gradient(180deg, #1a1c22 0%, #0b0c12 100%)",
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
        pulseFaster: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: ".3" },
        },
        glitch: {
          "0%": { textShadow: "2px 0 red, -2px 0 cyan" },
          "20%": { textShadow: "-2px 0 red, 2px 0 cyan" },
          "40%": { textShadow: "2px 0 red, -2px 0 cyan" },
          "60%": { textShadow: "-2px 0 red, 2px 0 cyan" },
          "80%": { textShadow: "2px 0 red, -2px 0 cyan" },
          "100%": { textShadow: "none" },
        },
      },
      animation: {
        grain: "grain 8s steps(6) infinite",
        sweep: "sweep 12s linear infinite",
        pulseSlow: "pulseSlow 5s ease-in-out infinite",
        pulseFaster: "pulseFaster 2s ease-in-out infinite",
        glitch: "glitch 1.8s infinite",
      },
      letterSpacing: {
        tighter: "-.03em",
      },
      lineHeight: {
        snug: "1.1",
      },
      zIndex: {
        overlay: "999",
        behind: "-1",
      },
      spacing: {
        cinematic: "3rem",
        cinematicLg: "6rem",
      },
    },
  },
  plugins: [],
};

export default config;
