/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        regalblueby: {
          400: "#2d776c",
        },
      },
      boxShadow: {
        aboutshadow: "10px 10px 0px -1px rgba(36,97,88,1)",
      },
    },
  },
  plugins: [],
};
