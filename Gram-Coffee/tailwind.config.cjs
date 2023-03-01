/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#e5d3b3",
        "primary-300": "#b99976",
        "primary-500": "#664229",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#b99976",
        "headingColor": "#2e2e2e",
        "textColor": "#515151",
        "cartNumBg": "#e80013",
        "primary": "#f5f3f3",
        "cardOverlay": "rgba(256,256,256,0.4)",
        "lighttextGray": "#9ca0ab",
        "card": "rgba(256,256,256,0.8)",
        "cartBg": "#282a2c",
        "cartItem": "#2e3033",
        "cartTotal": "#343739",

      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/hand.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
