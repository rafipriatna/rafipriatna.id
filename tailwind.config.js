module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: theme => ({
        default: {
          css: {
            color: theme("colors.gray.900"),
            a: {
              color: theme("colors.blue.700"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
            },
          },
        },

        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.green.500"),
              "&:hover": {
                color: theme("colors.green.500"),
              },
            },

            h1: {
              color: theme("colors.gray.300"),
            },
            h2: {
              color: theme("colors.gray.300"),
            },
            h3: {
              color: theme("colors.gray.300"),
            },
            h4: {
              color: theme("colors.gray.300"),
            },
            h5: {
              color: theme("colors.gray.300"),
            },
            h6: {
              color: theme("colors.gray.300"),
            },

            strong: {
              color: theme("colors.gray.300"),
            },

            code: {
              color: theme("colors.gray.300"),
            },

            figcaption: {
              color: theme("colors.gray.500"),
              textAlign: ['center']
            },

            blockquote: {
              color: theme("colors.gray.300"),
            },
          },
        },
      }),
      container: {
        padding: '0 2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require(`@tailwindcss/ui`)],
}
