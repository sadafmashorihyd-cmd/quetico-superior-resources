import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — deep navy/black ground, muted antique gold accent
        ink: {
          DEFAULT: "#0A0E14", // near-black base
          900: "#0B1220", // deep navy
          800: "#101828",
          700: "#182236",
          600: "#232F45",
        },
        gold: {
          DEFAULT: "#C9A227", // muted antique gold, primary accent
          light: "#E8C468", // warm highlight gold
          dim: "#8A7020", // recessed gold for borders/hairlines
        },
        paper: "#F5F3EE", // warm off-white for text on dark
        slate: {
          DEFAULT: "#8B94A3", // secondary text
          light: "#B6BDC9",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        wide2: "0.08em",
      },
      maxWidth: {
        prose: "72ch",
      },
      backgroundImage: {
        "contour-lines": "url('/contour.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
