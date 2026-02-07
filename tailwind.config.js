/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf0e4',
          200: '#bae0cd',
          300: '#8ccaad',
          400: '#5aad87',
          500: '#38936c',
          600: '#287556',
          700: '#205d46',
          800: '#1c4a38',
          900: '#183d2f'
        },
        accent: {
          50: '#faf5f0',
          100: '#f3e8dc',
          200: '#e7d1b9',
          300: '#d7b490',
          400: '#c79467',
          500: '#b87a4b',
          600: '#a4643d',
          700: '#885034',
          800: '#6e4130',
          900: '#5a3629'
        }
      },
      fontFamily: {
        sans: ['"Inter"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
      }
    },
  },
  plugins: [],
};
