/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
  
    },
    screens: {
      'xm': '300px',
      // => @media (min-width: 576px) { ... }

      'sm': '764px',
      // => @media (min-width: 576px) { ... }

      'md': '1024px',
      // => @media (min-width: 960px) { ... }

      'lg': '1240px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}

