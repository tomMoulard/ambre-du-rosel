/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf4f4',
          100: '#fbe8e8',
          200: '#f7d5d5',
          300: '#f0b3b3',
          400: '#e68888',
          500: '#d65d5d',
          600: '#c14040',
          700: '#9f2e2e',
          800: '#852929',
          900: '#6f2727',
          950: '#3c1111',
        },
        gold: {
          50: '#fefbec',
          100: '#fbf4c9',
          200: '#f8e88e',
          300: '#f5d753',
          400: '#f2c62c',
          500: '#e2a918',
          600: '#c68212',
          700: '#9d5c12',
          800: '#824916',
          900: '#6f3c18',
          950: '#411f0a',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
