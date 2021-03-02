module.exports = {
  purge: [
    './commons/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#9E6240',
        secondary: '#DEA47E',
        hilight: '#CD4631',
        link: '#81ADC8',
        background: 'F8F2DC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
