/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#003049",
        secondary: "#457b9d",
        tertiary: "#22577a",
        "black-100": "#001d3d",
        "black-200": "#003049",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35 text-justify",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: (theme: any) => ({
        "hero-pattern": "url('/src/assets/Background_1.jpg')",
        "gradient-custom": `linear-gradient(to bottom, ${theme('colors.secondary')} 0%, transparent 100%)`,
      }),

    },
  },
  plugins: [],
};
