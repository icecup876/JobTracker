/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/.{html,js}", "./public/index.html"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      // Default Tailwind color palette
    },
    spacing: {
      px: '1px',
      0: '0px',
      0.5: '0.125rem',
      1: '0.25rem',
      // More spacing values...
    },
    // Other theme configurations like fontSize, borderRadius, etc.
    extend: {},
  },
  plugins: [],
};