/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        serif: ['"Source Serif 4"', "Georgia", "Cambria", "serif"],
        display: ['"Fraunces Variable"', "Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
