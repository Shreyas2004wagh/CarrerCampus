/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          900: '#4c1d95',
          800: '#5b21b6',
          700: '#6d28d9',
          600: '#7c3aed',
          300: '#c4b5fd',
          200: '#ddd6fe',
        },
      },
    },
  },
  plugins: [],
};