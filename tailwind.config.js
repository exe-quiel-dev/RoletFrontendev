/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{jsx,tsx,html}',
    './pages/**/*.{jsx,tsx,html}'
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '600px', // => @media (min-width: 640px) { ... }
      'md': '768px', // => @media (min-width: 768px) { ... }
      'lg': '992px', // => @media (min-width: 1024px) { ... }
      'xl': '1200px', // => @media (min-width: 1280px) { ... }
  }
  },
  plugins: [],
}

