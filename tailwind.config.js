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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
