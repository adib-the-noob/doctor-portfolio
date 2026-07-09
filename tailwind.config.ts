import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0E1418",
        paper: "#F2EFE8",
        signal: "#C8442A",
        bdgreen: "#006A4E",
      },
      fontFamily: {
        display: ['var(--font-bn-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-bn-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '6xl': '72rem',
      },
    },
  },
  plugins: [],
};

export default config;
