const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        slate: colors.slate,
        gray: colors.gray
      },
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)'
        }
      },
      backgroundColor: {
        skin: {
          fill: 'var(--color-fill)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-accent-hover)',
          'button-muted': 'var(--color-button-muted)',
          'button-muted-hover': 'var(--color-button-muted-hover)'
        }
      },
      gradientColorStops: {
        skin: {
          hue: 'var(--color-fill)'
        }
      }
    },
  },
  plugins: [],
}