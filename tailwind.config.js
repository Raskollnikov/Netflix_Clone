/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "footer-texture": `url('/netflix/src/images/netflix-bg.jpg')`,
      }),
    },
  },
  plugins: [],
};
