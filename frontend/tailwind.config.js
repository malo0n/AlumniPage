module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "482px",
      sm: "640px",
      md: "768px",
      lg: "1030px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        openSans: ['"Open Sans"', "sans-serif"],
        notoSans: ['"Noto Sans"', "sans-serif"],
      },
      colors: {
        background: "#f2f3f7",
        white: "#fff",
        blackMain: "#121111",
        black: "#000",
        red: "#ff2424",
        grey: "#a8a8a8",

        orangeText: "#f24822",
        greenText: "#14ae5c",

        orange: "#ff6404",
        lightGreen: "#19c96b",
        turquoise: "#36b7be",
        purple: "#8000ff",
        pink: "#ff09c9",
        blue: "#3450ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
