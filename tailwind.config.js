/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
    colors:{
      primary:"#6222cc",
      secondary:"#fba504",
      light:"#f6f4f9",
      dark:"#04000b",
    },
    },
  },
  plugins: [require('flowbite/plugin')],
};
