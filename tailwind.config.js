/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-footer": "var(--gradient-footer)",
        "gradient-vertical1-1": "var(--gradient-vertical1-1)",
        "gradient-vertical2-1": "var(--gradient-vertical2-1)",
        "gradient-vertical3-1": "var(--gradient-vertical3-1)",
        "gradient-vertical4-1": "var(--gradient-vertical4-1)",
        "gradient-brands": "var(--gradient-brands)",
        "gradient-brands-1": "var(--gradient-brands-1)",
        "gradient-multi-1": "var(--gradient-multi-1)",
        "gradient-multi-2": "var(--gradient-multi-2)",
        "gradient-multi-3": "var(--gradient-multi-3)",
        "gradient-multi-4": "var(--gradient-multi-4)",
        "gradient-multi-5": "var(--gradient-multi-5)",
        "gradient-multi-6": "var(--gradient-multi-6)",
        "gradient-form": "var(--gradient-form)",
      },
      boxShadow: {
        "shadow-custom": "var(--shadow-custom)",
        "shadow-brands": "var(--shadow-brands)",
        "shade-vertical4": "var(--shade-vertical4)",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
