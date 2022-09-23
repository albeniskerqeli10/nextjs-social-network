module.exports = {

  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "light-primary": "#F0F5FA",
        deepBlue: "#2B6BED",
      },
      boxShadow: {
        custom: "0 3px 15px rgb(0 0 0 / 7%)",
        box: "0 3px 20px rgb(0 0 0 / 4%)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      manrope:["Manrope", "sans-serif"]
    },
  },
  variants: {},
  plugins: [],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
}
