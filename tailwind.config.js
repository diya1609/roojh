module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        amber: { a200: "#ffd33c" },
        black: {
          "900_05": "#00000005",
          "900_0a": "#0000000a",
          "900_0c": "#0000000c",
          "900_0f": "#0000000f",
          "900_14": "#00000014",
          "900_1e": "#0000001e",
        },
        blue: { 100: "#c1dbff", 600: "#2273e7", "700_e8": "#2573e4e8" },
        blue_gray: { 400: "#878787" },
        colors: { white: { solid: "#ffffff" } },
        deep_orange: {
          200: "#ffa69b",
          "200_00": "#ffa69b00",
          "400_1e": "#ff6b591e",
          "400_3f": "#ff6b593f",
          "400_4c": "#ff6b594c",
          "400_51": "#ff6b5951",
        },
        deep_purple: { 100: "#ddd1ff" },
        extra_color: { bg: "#f9f9f9" },
        gradient: { text: "#ff6b59" },
        gray: {
          50: "#f5f5ff",
          300: "#e1e1e1",
          400: "#c6c6c6",
          500: "#969696",
          700: "#636363",
          800: "#3a3a3a",
          900: "#191919",
          "500_01": "#9b9b9b",
          "900_01": "#161616",
          "900_02": "#171515",
        },
        indigo: { 800: "#204289" },
        main_color: { orange: { 500: { 0: "#fa5946", 1: "#fa59461e" } } },
        red: {
          50: "#ffeeed",
          100: "#ffd6d1",
          400: "#f46654",
          600: "#d64939",
          "400_01": "#f66655",
          a200_14: "#fa594614",
          a200_19: "#fa594619",
          a200_59: "#fa594659",
        },
        text: { 50: "#0c0c0c59", 70: "#0c0c0cb2", 100: { 0: "#0c0c0c", 1: "#0c0c0c7f" } },
        white: { a700_00: "#ffffff00", a700_19: "#ffffff19", a700_1e: "#ffffff1e", a700_3f: "#ffffff3f" },
      },
      boxShadow: {
        xs: "0 4px 26px 0 #0000000f",
        sm: "0 25px 35px 0 #ff6b591e",
        md: "0 10px 30px 0 #0000000c",
        lg: "0 25px 35px 0 #0000001e",
        xl: "0 25px 35px 0 #00000014",
        "2xl": "0 12px 35px 0 #ff6b594c",
        "3xl": "0 30.01px 42px 0 #ff6b594c",
        "4xl": "0 25px 35px 0 #ff6b5951",
        "5xl": "0 5.36px 14px 0 #0000000a",
      },
      fontFamily: { arimo: "Arimo", inter: "Inter", poppins: "Poppins", lato: "Lato" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #ff6b59,#2273e7)",
        gradient1: "radial-gradient(138deg, #ff6b59,#2573e4e8,#2273e7,#ffa69b00), url(/public/images/img_section2.png)",
        gradient2: "linear-gradient(114deg, #ff6b59,#2273e7,#ffa69b)",
        gradient3: "linear-gradient(180deg, #d64939,#ffffff00)",
        gradient4: "linear-gradient(110deg, #f66655,#204289)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
