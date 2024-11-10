/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        blacks: {
          black_700: '#000',
          black_500: '#000814',
          black_300: '#141414',
          black_200: '#262626',
        },
        whites: {
          white_200: '#ffff',
          white_300: '#B9B5B5',
        },
        oranges: {
          orange_900: '#FC2F00',
          orange_600: '#FB5607',
          orange_500: '#E85D04',
          orange_100: '#FBBA97',
        },
        grays: {
          gray_100: '#CED4DA',
          gray_400: '#2B2D42',
          gray_500: '#212529',
        },
        blues: {
          blue_100: '#1F659B',
          blue_300: '#1877F2',
        },
        greens: {
          green_300: '#007F5F',
        },
        purples: {
          purple_300: '#7C1C9F',
          purple_200: '#6228D7',
        },
        pinks: {
          pink_100: '#EE2A7B',
        },
        yellows: { 
          yellow_100: '#F9CE34',
        },
        reds: {
          red_100: '#FF0000',
          red_500: '#3B0505',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        rubik: ['Rubik Wet Paint', 'sans-serif'],
      },
      screens: {
        sm: '320px',
      }
    },
  },
  plugins: [
  ],
}