/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./public/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#FF8C00',
        secondary: '#1E3A5F',
        accent: '#4A90E2',
        success: '#27AE60',
        warning: '#F39C12',
        danger: '#E74C3C',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'elevated': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
