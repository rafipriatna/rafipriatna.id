const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.neutral,
      red: colors.red,
      blue: colors.sky,
      teal: colors.teal,
      pink: colors.pink,
      indigo: colors.indigo,
      slate: colors.slate,
      yellow: colors.amber,
      white: "#fff",
      dark: '#08153A',
      navy: "#0B1F65",
      royal: "#1A7CFA"
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
  plugins: [require('@tailwindcss/typography')],
}
