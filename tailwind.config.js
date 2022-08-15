module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      black: `rgb(${26}, ${25}, ${25})`,
      white: `rgb(${212}, ${211}, ${211})`,
      blurrRed: `rgb(${200}, ${4}, ${34}, ${0.8})`,
      menuBlack: `rgb(${0}, ${0}, ${0}, ${0.8})`,
    },
    extend: {
      fontFamily: {
        naruto: ['naruto'],
      },
      backgroundImage: {
        brushR: "url('../public/static/assets/images/brushR.png')",
        brush: "url('../public/static/assets/images/brush.png')",
        wBrush: "url('../public/static/assets/images/wBrush.png')",
      },
      backgroundPosition: {
        topBar: '-150px',
        bottBar: '-70px',
      },
      screens: {
        smallPhone: { raw: '(max-height: 670px)' },
      },
    },
  },
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  plugins: [[require('prettier-plugin-tailwindcss')]],
};
