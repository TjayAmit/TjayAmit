/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // New color palette
        cream: {
          DEFAULT: '#F5EEDD',
          light: '#F9F5EC'
        },
        teal: {
          light: '#7AE2CF',
          DEFAULT: '#077A7D',
          dark: '#055B5E'
        },
        navy: {
          DEFAULT: '#06202B',
          dark: '#041822'
        },
        
        // Theme colors
        primary: {
          light: '#7AE2CF',
          DEFAULT: '#077A7D',
          dark: '#055B5E'
        },
        
        // Dark theme palette
        dark: {
          bg: '#06202B',
          surface: '#0A2A3A',
          card: '#0E3548',
          text: '#F5EEDD'
        },
        
        // Text colors
        text: {
          light: '#F5EEDD',
          dark: '#06202B'
        }
      },
      backgroundColor: {
        light: '#F5EEDD',
        dark: {
          DEFAULT: '#06202B',
          surface: '#0A2A3A',
          card: '#0E3548'
        }
      },
    }
  },
  plugins: [],
}
