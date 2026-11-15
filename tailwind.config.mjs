/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,ts}"],
  theme: {
    extend: {
      colors: {
        carvao: "#181614",   // fundo
        carvao2: "#201D1A",  // seções alternadas
        osso: "#EDE6DA",     // texto e botão claro
        areia: "#B9AFA0",    // texto secundário
        linha: "#2E2A26",    // divisores
        bordo: "#8C2B2F",    // único acento (botões e seleção)
        bordo2: "#A33A3E",
      },
      fontFamily: {
        display: ['"Barlow Condensed"', "Impact", "sans-serif"],
        sans: ["Barlow", "system-ui", "sans-serif"],
      },
    },
  },
};
