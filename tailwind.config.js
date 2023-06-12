/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/**/*.{css,sass}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A62039",
        background: "#171717",
        blue: "#10479B",
        yellow: "#C87B08",
        white: "#fff",
        green: "#078539",
        red: "#A62039",
        // gray: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
