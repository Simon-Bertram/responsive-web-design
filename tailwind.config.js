/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        sm: "1rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", "Inter", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
}
