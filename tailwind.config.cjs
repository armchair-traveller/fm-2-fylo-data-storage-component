module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    colors: {
      // TODO: Your colors here
      main: {
        100: "hsl(243, 100%, 93%)",
        200: "hsl(229, 7%, 55%)",
        300: "hsl(228, 56%, 26%)",
        400: "hsl(229, 57%, 11%)",
      },
    },
    fontFamily: {
      main: ["Raleway", "system-ui"],
    },
  },
  plugins: [],
};
