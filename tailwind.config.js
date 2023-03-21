/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@vercel/examples-ui/tailwind')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@vercel/examples-ui/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        "primary-contrast": "#fff",
        whitesmoke: { "100": "#ebeef2", "200": "#eaeaea" },
        orange: "#f99a0e",
        darkorange: "#dc880b",
        peru: "#9e6104",
        slategray: "#576074",
        darkslategray: "#434343",
        "studio-lightmode-midseparator-dee3eb": "#dee3eb",
        "studio-darkmode-normalsolid-icons-96a2be": "#96a2be",
        dimgray: "#495367",
        "studio-darkmode-exportbg-1a202e": "#1a202e",
        "studio-darkmode-maincta-457eff": "#457eff",
      },
      fontFamily: {
        "components-button-large": "Roboto",
        poppins: "Poppins",
        "source-code-pro": "'Source Code Pro'",
        alegreya: "Alegreya",
      },
      borderRadius: { "3xs": "10px" },
    },
    fontSize: {
      mini: "15px",
      xl: "20px",
      lg: "18px",
      "3xl": "22px",
      sm: "14px",
      mid: "17px",
      base: "16px",
      "7xl": "26px",
    },
    screens: { md: { max: "900px" }, sm: { max: "650px" } },
  },
  corePlugins: { preflight: false },
};
