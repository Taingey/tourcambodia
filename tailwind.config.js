/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./HTML/*.{html,js}"],
  theme: {
    container: {
      padding: "2rem"
    },
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        "Dark-Gray": "#575557",
        "Light-Gray-20": "#E4E2D5",
        "Light-Gray-10": "#F3F6F6",
        "warning-Orange": "#FF8153",
        "Royal-Blue": "#3E4BEE",
        "Sky-Blue": "#467AFF",
        "Dark-Blue": "#022F50"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Staatliches: ["Staatliches", "sans-serif"],
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900"
      },
      fontSize: {
        body: "15px",
        button: "16px",
        nav: "12px",
        p: "12px",
        title: "20px",
        h5: "16px",
        h2: "24px",
        h1: "36px"
      },
      boxShadow: {
        boxShadow_Slide:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px"
      }
    },
    screens: {
      ml: { max: "775px" },

      xl: { max: "1179px" },

      md: { max: "1085px" },

      sm: { max: "840px" },

      pl: { max: "556px" },

      lg: { max: "700px" },
    }
  },
  plugins: []
};
