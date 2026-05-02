// postcss.config.mjs
// PostCSS is the tool that PROCESSES your CSS before the browser sees it.
// Tailwind hooks into PostCSS to generate utility classes at build time.
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}, // adds vendor prefixes like -webkit- automatically
  },
};
export default config;
