module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5B5B', // Rojo
        secondary: '#FFD662', // Amarillo
        accent: '#6EE7B7', // Verde
        danger: '#FF708E', // Rosa
        warning: '#FFAB4E', // Naranja
      },
    },
  },
  variants: {},
  plugins: [],
};
