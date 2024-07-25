import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      red: "#E95959",
      blue: "#233773",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        hero: "url('/images/hero.webp')",
        about: "url('/images/about.webp')",
        one: "url('/images/carousel/one.webp')",
        two: "url('/images/carousel/two.webp')",
        three: "url('/images/carousel/three.webp')",
        four: "url('/images/carousel/four.webp')",
        five: "url('/images/carousel/five.webp')",
        six: "url('/images/carousel/six.webp')",
        seven: "url('/images/carousel/seven.webp')",
        eight: "url('/images/carousel/eight.webp')",
        nine: "url('/images/carousel/nine.webp')",
        ten: "url('/images/carousel/ten.webp')",
        eleven: "url('/images/carousel/eleven.webp')",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addVariant }: { addVariant: Function }) {
      addVariant("children", "& > *");
      addVariant("children-hover", "& > *:hover");
    },
  ],
} satisfies Config;

export default config;
