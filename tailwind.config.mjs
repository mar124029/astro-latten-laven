/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "page-brackground": "#FFFBF0",
        "page-highlightcolor": "#FFF5E0",
        "text-primary": "#000000",
      },
      borderColor: {
        highlightcolor: "#FFF5E0",
      },
      fontFamily: {
        "poppins-medium": ["Poppins-Medium", "sans-serif"],
        "poppins-regular": ["Poppins-Regular", "sans-serif"],
        "poppins-semibold": ["Poppins-SemiBold", "sans-serif"],
      },
      fontSize: {
        "custom-16": "16px", // Define un tamaño de texto de 16px
      },
      lineHeight: {
        "custom-tight": "1.3em", // Define un interlineado de 1.3
        "custom-tight-1.2": "1.2em",
      },
    },
  },
  plugins: [],
};
