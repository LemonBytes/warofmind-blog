module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './architecture/core/components/**/*.{js,ts,jsx,tsx}',

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
      fontSize: new Array(201)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = `${val / 10}rem`;
          return acc;
        }, {}),
      lineHeight: new Array(201)
        .fill()
        .map((_, i) => i)
        .reduce((acc, val) => {
          acc[val] = `${val / 10}rem`;
          return acc;
        }, {}),
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
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './architecture/core/components//**/*.{js,ts,jsx,tsx}'],
  plugins: [[require('prettier-plugin-tailwindcss')]],
};
