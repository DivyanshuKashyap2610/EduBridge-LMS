// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",   // if you keep code in /src
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // add Tailwind plugins here if you use them, e.g.:
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
    // require("tailwindcss-animate"),
  ],
};
