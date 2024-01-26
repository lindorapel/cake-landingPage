/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        darkPink: "#911A36",
        softPink: "#FDE9EB",
        grey01: "#374151",
      },
      fontFamily: {
        openSans: ["Open Sans"],
      },
      zIndex: {
        10000: "10000",
      },
    },
  },
  plugins: [import("flowbite/plugin")],
};
