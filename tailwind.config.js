module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {

    colors: {
      black: `rgb(${26}, ${25}, ${25})`,
      white: `rgb(${212}, ${211}, ${211})`,
      blurrBlack: `rgb(${200}, ${4}, ${34}, ${0.8})`,
      menuBlack: `rgb(${0}, ${0}, ${0}, ${0.9})`,
    },
    extend: {
      fontFamily: {
        naruto: ["naruto"]
      },
      backgroundImage: {
        brush: "url('../public/assets/images/brush.png')"
      },
      backgroundPosition: {
        topBar: "-150px",
        bottBar: "-70px"
      },
      screens: {
        'smallPhone': { 'raw': '(max-height: 670px)' },
      },

    },
  },
  plugins: [],
}
