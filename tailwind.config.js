module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./blocks/**/*.{vue,js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        bgDark: "#0000000f",
        blue: "#2563eb",
      },
      boxShadow: {
        block: "0 20px rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};
