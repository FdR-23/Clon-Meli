/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    boxShadow: {
      'nav-shadow': '0 1px 0 0 rgb(0 0 0 / 10%)',
      'nav-input': '0 1px 2px 0 rgb(0 0 0 / 20%)',
      'button-banner': '0 8px 16px 0 rgb(0 0 0 / 10%)',
      'button-pagination': 'inset 0 0 0 1px rgb(255 255 255)',
      'button-hover-pagination': '0 0 0 1px rgb(0 0 0 / 25%)',
      'cart-discovery': '0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%)',
      'button-categorie': '0 2px 4px 0 rgb(0 0 0 / 19%)',
      'hover-button-categorie': '0 7px 16px 0 rgb(0 0 0 / 20%), 0 1px 3px 0 rgb(0 0 0 / 10%);'
    },
    extend: {
      fontFamily: {
        "navigation": ["navigation", 'sans-serif'],
        'principal': ["Proxima Nova"],


      },
      colors: {
        'nav-bar': 'rgb(255 241 89)',
      },
      backgroundImage: {
        'logo-large': "url('/src/assets/img/logos/logo__large_plus.png')",
        'logo-small': "url('/src/assets/img/logos/logo__small.png')",
      },
      backgroundColor: {
        'main': "rgb(237 237 237)"
      }
    },
  },
  plugins: [],
}