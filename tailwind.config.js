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
        '0%': { opacity: '0', top: '-200vh' },
        '100%': { opacity: '1', top: '0' },
      },
      menuOut: {
        '0%': { opacity: '1', top: '0' },
        '100%': { opacity: '0', top: '-200vh' },
      },
    },
    animation: {
      menuIn: 'menuIn 0.8s ease-in-out',
      menuOut: 'menuOut 0.8s ease-in-out',
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
