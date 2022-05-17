module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      white: "#d4d3d3"
    },
    extend: {
      fontFamily: {
        naruto: ["naruto"]
      },
      backgroundImage: {
        brush: "url('../public/assets/images/brush.png')"
      },
      backgroundSize: {
        "300": "400%",
      },
      backgroundPosition: {
        farLeft: "-650px",
        mediumLeft: "300px"
      },
      width: {
        mediumView: "70vw"
      },
      bottom: {
        "6%": '6%'
      },
      right: {
        "6%": '6%'
      }
    },
  },
  plugins: [],
}
