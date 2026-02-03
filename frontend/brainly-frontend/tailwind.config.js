/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:{
          100:"#d2d2d2",
          200:"#9fa3a5",
          600:"#e7e9e9"

        },
          purple:{
            200: "#d4d8ec",
            500:"#9793de",
            600: "#685fba"
          }
      }
    
    },
  },
  plugins: [],
};
