/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#EF233C",
          light: "#F34D60",
          dark: "#D31B32",
          darkest: "#B81729",
        },
        secondary: {
          DEFAULT: "#313638",
          light: "#474B4D",
          dark: "#242728",
          darkest: "#171818",
        },
        tertiary: {
          DEFAULT: "#FBFCFF",
          light: "#FFFFFF",
          dark: "#EDF0F9",
          darkest: "#DEE3F0",
        },
      },
      animation: {
        text: "text 5s ease infinite",
        light: "light 3s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        light: {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "bottom",
          },
        },
      },
    },
  },
  plugins: [],
};
