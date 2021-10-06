module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        branding: {
          50: "#baf5eb", //for light theme
          200: "#75c1c9", //normal color for branding (light) "Flax Blue" 
          700: "#34678c", //normal color for branding (dark) "Delphinium Blue" 
          900: "#0a0b0d", //for dark theme "Clean Black"
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("nightwind")],
}
