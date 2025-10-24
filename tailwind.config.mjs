/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fadfaa',
          100: '#f5de9f',
          200: '#f5de9f',
          300: '#bf934f',
          400: '#bf934f',
          500: '#bf934f',
          600: '#5a2537',
          700: '#5a2537',
          800: '#34111d',
          900: '#34111d',
          950: '#34111d',
        },
        gold: {
          50: '#fadfaa',
          100: '#f5de9f',
          200: '#f5de9f',
          300: '#f5de9f',
          400: '#bf934f',
          500: '#bf934f',
          600: '#bf934f',
          700: '#bf934f',
          800: '#bf934f',
          900: '#bf934f',
          950: '#bf934f',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
