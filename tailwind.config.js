module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        gray: {
          custom: '#242331'
        },
        yellow: {
          custom: '#edf060'
        },
        red: {
          custom: '#ef233c'
        }
      }
    }
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active']
    }
  },
  plugins: []
}
