module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        willowgrove: {
          50: '#f4f5f4',
          100: '#e6e7e4',
          200: '#cdd1c9',
          300: '#aab0a5',
          400: '#828b7c',
          500: '#6d7866',
          600: '#4c5447',
          700: '#3d4438',
          800: '#32372e',
          900: '#282d27',
          950: '#161915',
      },
      }
    },
  },
  plugins: []
}
