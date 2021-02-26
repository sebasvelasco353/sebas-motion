module.exports = {
  purge: [
    './components/**/*.{vue, js}',
    './layout/**/*.{vue, js}',
    './content/**/*.{vue, js}',
    './content/**/*.{md}',
    './plugins/**/*.{vue, js}',
    './pages/**/*.{vue, js}',
    './nuxt.config.{js, ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#01FFFF',
      black: '#000000',
      white: '#FFFFFF',
    },
    keyframes: {
      menuIn: {
        '0%': { opacity: '0', transform: 'translateY(0rem)' },
        '100%': { opacity: '1', transform: 'translateY(15rem)' },
      },
      menuOut: {
        '100%': { opacity: '0', transform: 'translateY(0px)' },
        '0%': { opacity: '1', transform: 'translateY(15rem)' },
      },
    },
    animation: {
      menuIn: 'menuIn 0.5s ease-in-out',
      menuOut: 'menuOut 0.5s ease-in-out',
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
