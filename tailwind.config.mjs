/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#008343",
        secondary: "#0087DD",
        fondo: "#B7A99A",
        texto: "#1D1D35",
        cardBg: "#F1FCF3",
        lightGreen: "#ABFFCA",
        navBar: "#DEB887",
        navDark: "#422A00",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
