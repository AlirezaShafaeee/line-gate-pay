/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      centery: 'Century Gothic',
    },
    extend: {
      colors: {
        background: '#FAFAFA',
        text: '#242424',
        primary: '#1093FF',
        card: '#FFF',
        card_shade: '#F5F5F5',
        icon: '#F6BF53',
        card_light: '#E0F1FF',
      },
    },
  },
  plugins: [],
}
