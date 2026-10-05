import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#06060c",
          900: "#0a0a14",
          800: "#12121f",
          700: "#1b1b2c",
        },
      },
      animation: {
        "float-slow": "floatSlow 9s ease-in-out infinite",
        "float-slower": "floatSlow 13s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        "pulse-glow": "pulseGlow 4.5s ease-in-out infinite",
        shimmer: "shimmer 2.8s linear infinite",
        "rotate-slow": "rotate360 16s linear infinite",
      },
      keyframes: {
        rotate360: {
          to: { transform: "rotate(360deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
