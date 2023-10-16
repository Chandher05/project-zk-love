/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#010101",
        white: "#FFFFFF",
        grey: "#7B7B7B",
        primary: {
          100: "#F28066",
          300: "#F2522E",
          700: "#F24405",
        },
        secondary: {
          100: "#6D6D6D",
        },
        lightGray: "#858585",
      },

      boxShadow: {
        sm: "0px 2px 8px rgba(0, 0, 0, 0.06)",
        "2xl": "0px 2px 8px rgba(24, 26, 29, 0.05)",
        "3xl": "0px 24px 24px rgba(0, 0, 0, 0.17);",
        "4xl": "0px 3.18056px 19.0833px rgba(0, 0, 0, 0.16);",
        "5xl": "4px 0px 15px rgba(24, 26, 29, 0.05)",
        "6xl": "0px 4px 25px rgba(24, 26, 29, 0.05)",
        "7xl": "0px 12px 24px rgba(24, 26, 29, 0.16)",
        "8xl": "8px 0px 10px rgba(24, 26, 29, 0.05)",
        topLeft: "-12px 0px 16px rgba(24, 26, 29, 0.05)",
        sidebar: "-3.97112px 0px 14.8917px rgba(24, 26, 29, 0.05);",
      },

      container: {
        padding: {
          DEFAULT: "1.25rem",
          xl: "1.25rem",
          "2xl": "1.25rem",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
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