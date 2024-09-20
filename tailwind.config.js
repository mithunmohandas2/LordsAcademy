/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      colors: {
        specialCyan: "#67c1d3",
        menubarBg: "#5A247B",
        violetTxt: "#7574a6",
      },
    }
  },
  plugins: [],
}
