module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
      },
      screens: {
        "2xl": "1320px",
      },
    },
    plugins: [],
  },
};
