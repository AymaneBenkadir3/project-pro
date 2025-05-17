/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: '#3b5998',
          light: '#8ba4d0',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          dark: '#5687c6',
          light: '#a8c1e6',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          dark: '#d97706',
          light: '#fbbf4f',
        },
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',
        background: 'var(--color-background)',
        text: 'var(--color-text)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        cairo: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};