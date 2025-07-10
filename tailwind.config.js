/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
       'xl': {'raw': '(min-width:312px) and (max-width: 667px)'},
    },
  },
  plugins: [],
}

