import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lemon-green": "#B5D333",
        "medical-blue": "#1e3a5f",
        "dark": "#121212",
        "accent-light": "#F2F8D5",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
    },
  },
  plugins: [],
  // Performance optimizations
  future: {
    hoverOnlyWhenSupported: true, // Prevents hover styles on touch devices
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
};

export default config;
