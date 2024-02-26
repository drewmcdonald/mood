/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["media"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--moonstone-100)",
        input: "var(--gunmetal-300)",
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          DEFAULT: "var(--moonstone)",
          foreground: "var(--moonstone-50)",
        },
        secondary: {
          DEFAULT: "var(--gunmetal-400)",
          foreground: "var(--gunmetal-50)",
        },
        destructive: {
          DEFAULT: "var(--old-rose)",
          foreground: "var(--old-rose-50)",
        },
        muted: {
          DEFAULT: "var(--gunmetal-300)",
          foreground: "var(--gunmetal-700)",
        },
        accent: {
          DEFAULT: "var(--sandy-brown)",
          foreground: "var(--moonstone-50)",
        },
        popover: {
          DEFAULT: "var(--gunmetal-100)",
          foreground: "var(--foreground)",
        },
        card: {
          DEFAULT: "var(--background)",
          foreground: "var(--foreground)",
        },

        border: "var(--moonstone-100)",
        input: "var(--gunmetal-300)",
        ring: "var(--moonstone)",

        gunmetal: {
          DEFAULT: "var(--gunmetal)",
          50: "var(--gunmetal-50)",
          100: "var(--gunmetal-100)",
          200: "var(--gunmetal-200)",
          300: "var(--gunmetal-300)",
          400: "var(--gunmetal-400)",
          500: "var(--gunmetal-500)",
          600: "var(--gunmetal-600)",
          700: "var(--gunmetal-700)",
          800: "var(--gunmetal-800)",
          900: "var(--gunmetal-900)",
          950: "var(--gunmetal-950)",
        },
        moonstone: {
          DEFAULT: "var(--moonstone)",
          50: "var(--moonstone-50)",
          100: "var(--moonstone-100)",
          200: "var(--moonstone-200)",
          300: "var(--moonstone-300)",
          400: "var(--moonstone-400)",
          500: "var(--moonstone-500)",
          600: "var(--moonstone-600)",
          700: "var(--moonstone-700)",
          800: "var(--moonstone-800)",
          900: "var(--moonstone-900)",
          950: "var(--moonstone-950)",
        },

        "sandy-brown": {
          DEFAULT: "var(--sandy-brown)",
          50: "var(--sandy-brown-50)",
          100: "var(--sandy-brown-100)",
          200: "var(--sandy-brown-200)",
          300: "var(--sandy-brown-300)",
          400: "var(--sandy-brown-400)",
          500: "var(--sandy-brown-500)",
          600: "var(--sandy-brown-600)",
          700: "var(--sandy-brown-700)",
          800: "var(--sandy-brown-800)",
          900: "var(--sandy-brown-900)",
          950: "var(--sandy-brown-950)",
        },

        "old-rose": {
          DEFAULT: "var(--old-rose)",
          50: "var(--old-rose-50)",
          100: "var(--old-rose-100)",
          200: "var(--old-rose-200)",
          300: "var(--old-rose-300)",
          400: "var(--old-rose-400)",
          500: "var(--old-rose-500)",
          600: "var(--old-rose-600)",
          700: "var(--old-rose-700)",
          800: "var(--old-rose-800)",
          900: "var(--old-rose-900)",
          950: "var(--old-rose-950)",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
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
        "fade-in-95": {
          from: { opacity: "0" },
          to: { opacity: "0.95" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-95": "fade-in-95 0.4s ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
