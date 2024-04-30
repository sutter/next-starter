/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";
import { fieldBasicStyles, focusRingStyles } from "./lib/utils";

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    ...focusRingStyles.base.split(" "),
    ...focusRingStyles.variants.isFocusVisible.true.split(" "),
    ...focusRingStyles.variants.isFocusVisible.false.split(" "),
    ...fieldBasicStyles.base.split(" "),
    ...fieldBasicStyles.variants.size.lg.split(" "),
    ...fieldBasicStyles.variants.size.md.split(" "),
    ...fieldBasicStyles.variants.size.sm.split(" "),
    ...fieldBasicStyles.variants.size.xs.split(" "),
    ...fieldBasicStyles.variants.isDisabled.true.split(" "),
    ...fieldBasicStyles.variants.isInvalid.true.split(" "),
    ...fieldBasicStyles.variants.isFocused.true.split(" "),
    ...fieldBasicStyles.variants.isFocusVisible.true.split(" "),
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
        success: {
          ...colors.emerald,
          DEFAULT: colors.emerald[500],
        },
        input: {
          focus: colors.indigo[500],
          placeholder: colors.slate[400],
          disabled: colors.slate[100],
          DEFAULT: colors.slate[300],
        },
      },
    },
  },
  plugins: [require("tailwindcss-react-aria-components")],
};
