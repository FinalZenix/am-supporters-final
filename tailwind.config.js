/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{vue,js,ts,jsx,tsx,mdx}",
    "./components/**/*.{vue,js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{vue,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#BD9D49',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};