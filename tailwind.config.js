/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryTitle': '#024baa',
        'primaryContent': '#A0C878',
        'primarySubcontent': '#333A73',
        'primaryBase' : '#A0C878',
        'primaryAccent' : '#2D336B',
        'primaryBackground' : '#FBFFE4',
      }
    },
  },
  plugins: [],
}

