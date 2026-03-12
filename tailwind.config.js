/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#E02041",
          secondary: "#F5F5F5",
          dark: "#1A1A1A",
          light: "#FFFFFF",
          textMuted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "infinite-scroll": "infinite-scroll 20s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
