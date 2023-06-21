module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx, html}',
    './architecture/core/components/**/*.{js,ts,jsx,tsx, html}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '860px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      black: `rgb(${26}, ${25}, ${25})`,
      white: `rgb(${212}, ${211}, ${211})`,
      blurrRed: `rgb(${200}, ${4}, ${34}, ${0.6})`,
      menuBlack: `rgb(${0}, ${0}, ${0}, ${0.8})`,
    },
    extend: {
      fontFamily: {
        naruto: ['naruto'],
        capriola: ['capriola'],
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
        brush: "url('../public/static/assets/images/brush.webp')",
      },
      outlineWidth: {
        DEFAULT: '0.5px',
        0.5: '0.5px',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px',
      },
      backgroundPosition: {
        topBar: '-150px',
        bottBar: '-70px',
      },
      screens: {
        smallPhone: { raw: '(max-height: 670px)' },
      },
      keyframes: {
        down: {
          '0%': { transform: 'translateY(calc(-40px * 246))' },
          '100%': { transform: 'translateY(0)' },
        },
        up: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(calc(-40px * 246))' },
        },
      },
      animation: {
        'infinite-down': 'down 70s linear infinite',
        'infinite-up': 'up 70s linear infinite',
        pulse: 'pulse 5s linear infinite',
      },
    },
  },
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './architecture/core/components//**/*.{js,ts,jsx,tsx,}',
  ],
  // plugins: [[require('prettier-plugin-tailwindcss')]],
};
