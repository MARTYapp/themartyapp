import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marty-blue": "#0033ff",
        "marty-gray": "#2d2d2d",
      },
    },
  },
  plugins: [],
}
export default config