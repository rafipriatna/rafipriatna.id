const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
    },
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
            hr: {
              borderColor: theme("colors.gray.800"),
            },
          },
        },

        dark: {
          css: {
            color: theme("colors.gray.100"),
            a: {
              color: theme("colors.blue.700"),
              "&:hover": {
                color: theme("colors.blue.700"),
              },
            },

            p: {
              color: theme("colors.gray.300"),
            },

            hr: {
              borderColor: theme("colors.gray.300"),
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
              color: theme("colors.gray.100"),
            },

            code: {
              color: theme("colors.gray.300"),
            },

            figcaption: {
              color: theme("colors.gray.300"),
              textAlign: ["center"],
            },

            blockquote: {
              color: theme("colors.gray.300"),
            },
          },
        },
      }),
      container: {
        padding: "0 2rem",
      },
    },
  },
  variants: {
    extend: { typography: ["dark"] },
  },
  plugins: [require(`@tailwindcss/ui`)],
}
