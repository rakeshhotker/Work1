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
        "gradient-bottom": "var(--gradient-bottom)",
        "gradient-1": "var(--gradient-1)",
        "gradient-2": "var(--gradient-2)",
        "gradient-multi-1": "var(--gradient-multi-1)",
      },
      boxShadow: {
        "shadow-custom": "var(--shadow-custom)",
        "shadow-brands-1": "var(--shadow-brands-1)",
      },
    },
  },
  plugins: [],
};
