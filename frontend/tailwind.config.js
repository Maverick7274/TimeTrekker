/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'genos': ['Genos', 'sans-serif'],
        'tilt': ['Tilt Neon', 'sans-serif'],
        'josefin': ['Josefin Sans', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
    },
  },
},
  daisyui: {
    themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  plugins: [ require('daisyui'),],
}