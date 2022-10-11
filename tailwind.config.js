/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    extend: {
      outline: ["focus"],
    },
  },
  theme: {
    extend: {
      screens: {
        mobile: { max: "375px" },
      },
      colors: {
        bgColor: "#131518",
        darkBlue: "#262E38",
        basicText: "#969FAD",
        grey: "#7C8798",
        orange: "#FC7614",
      },
      borderRadius: {
        "3xl": "30px",
      },

      fontSize: {
        "3xl": ["28px", "32px"],
      },
    },
  },
  plugins: [],
};
