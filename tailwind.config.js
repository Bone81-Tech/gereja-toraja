/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'toraja-merah': '#D22A2A',
        'toraja-hitam': '#1A1A1A',
        'toraja-kuning': '#FFD700',
        'toraja-putih': '#FFFFFF',
        'toraja-coklat': '#8B4513',
        'toraja-merah-muda': '#E75450',
      },
    },
  },
  plugins: [],
}
