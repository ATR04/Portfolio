// ╔══════════════════════════════════════════════════════════╗
// ║  tailwind.config.ts — Tailwind CSS Configuration        ║
// ║                                                          ║
// ║  📚 WHAT IS TAILWIND CSS?                               ║
// ║  Tailwind is a utility-first CSS framework. Instead of  ║
// ║  writing CSS files you write class names directly in    ║
// ║  your JSX: e.g. className="bg-gray-900 text-white p-4" ║
// ╚══════════════════════════════════════════════════════════╝

import type { Config } from "tailwindcss";

const config: Config = {
  // 📌 content: Tailwind scans these files at build time to
  // remove any CSS classes you didn't use (tree-shaking).
  // This keeps your final CSS bundle tiny.
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // 📌 Custom colour palette for the dark/techy theme
      colors: {
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
        dark: {
          900: "#030712",
          800: "#0d1117",
          700: "#161b22",
          600: "#21262d",
        },
      },

      // 📌 Custom animations defined here are used via
      // className="animate-<name>" in your components
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          from: { boxShadow: "0 0 20px #06b6d4" },
          to: { boxShadow: "0 0 40px #06b6d4, 0 0 80px #06b6d4" },
        },
      },

      // Custom font families
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
