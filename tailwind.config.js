/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "960px",
      "xl": "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {

      colors: {
        primary: "#fffff",
        accent: {
          DEFAULT: "#fffff",
          hover: "#f9e3cd",
        },
        white: "#ffffff",
        lightorange: "#f9e3cd",
        darkorange:"#D6A49D",
        purple:"#EBE8FB",
        darkPurple: "#BF85C0",
        blue:"#2948A9",
        lightBlue: "#D2E5FF",
        background: "#112639",
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
  plugins: [require("tailwindcss-animate")],
}