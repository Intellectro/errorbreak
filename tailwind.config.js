/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,vue}",
  ],
  theme: {
    extend: {
        colors: {
            primary: "#19151e"
        }
    },
    fontFamily: {
      sans: ["Ubuntu", ...defaultTheme.fontFamily.sans]
    }
  },  
  plugins: [],
}
