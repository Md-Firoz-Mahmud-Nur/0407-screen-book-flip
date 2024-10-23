/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'art-bg': '#f5f5f5',
        'art-text': '#333333',
        'art-active': '#4f46e5',
        'art-hover': '#6b7280',
      },
    },
  },
  plugins: [
    daisyui,
  ],
}