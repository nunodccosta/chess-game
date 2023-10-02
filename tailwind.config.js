/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    colors: {
      text: {
        light: "#071122",
        dark: "#dee8f8",
      },
      background: {
        light: "#e6eef9",
        dark: "#060e19",
      },
      primary: {
        light: "#3327b4",
        dark: "#574bd8",
      },
      secondary: {
        light: "#ead9f7",
        dark: "#190826",
      },
      accent: {
        light: "#8f32d2",
        dark: "#8a2dcd",
      },
    },
  },
  plugins: [],
};
