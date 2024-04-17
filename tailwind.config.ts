/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors"

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: { ...colors.slate, DEFAULT: colors.slate[500] },
    },
    extend: {
      colors: {
        primary: {
          ...colors.indigo,
          DEFAULT: colors.indigo[500],
        },
        error: {
          ...colors.red,
          DEFAULT: colors.red[500],
        },
        input: {
          focus: colors.indigo[500],
          placeholder: colors.slate[400],
          DEFAULT: colors.slate[300],
        },
      },
    },
  },
  plugins: [require("tailwindcss-react-aria-components")],
}
