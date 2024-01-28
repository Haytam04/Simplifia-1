/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        mediumslateblue: {
          "100": "#6f65fa",
          "200": "#4e4feb",
          "300": "#2351f5",
          "400": "rgba(35, 81, 245, 0.86)",
          "500": "rgba(35, 81, 245, 0.85)",
        },
        gray: {
          "100": "#fffffe",
          "200": "#fbfcff",
          "300": "#212529",
          "400": "rgba(255, 255, 255, 0.93)",
          "500": "rgba(0, 0, 0, 0.6)",
        },
        floralwhite: "#f7f7ee",
        black: "#000",
        royalblue: {
          "100": "#4a78ff",
          "200": "#005dc6",
        },
        ghostwhite: "#f5f5ff",
        darkgray: "#9f9f9f",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#eee",
          "300": "rgba(238, 238, 238, 0.93)",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.93)",
        },
        dodgerblue: "#2682ed",
        midnightblue: "rgba(13, 24, 122, 0.69)",
        lightskyblue: "#a7cefc",
      },
      spacing: {},
      fontFamily: {
        "paragraph-p3-regular": "Inter",
        poppins: "Poppins",
        oswald: "Oswald",
        ubuntu: "Ubuntu",
        "dm-sans": "'DM Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      xl: "20px",
      "5xl": "24px",
      "11xl": "30px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      lgi: "19px",
      "51xl": "70px",
      "23xl": "42px",
      "37xl": "56px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      "21xl": "40px",
      "13xl": "32px",
      "7xl": "26px",
      "2xl": "21px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1300: {
        raw: "screen and (max-width: 1300px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
