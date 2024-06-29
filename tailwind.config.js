/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          background: "#F6F7FA",
          default: "#555555",
          instabtn: "#85BDE2",
        },
      },
    },
  },
  plugins: [],
};
