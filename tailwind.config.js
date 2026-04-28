/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
    './app/error.vue'
  ],

  theme: {
    extend: {
      fontFamily: {
      },

      colors: {
        /* Branded StahlForm Colors */
        'accent': 'var(--accent)',
        'secondary': 'var(--secondary)',
        'primary': 'var(--primary)',

        /* Details */
        'detail-primary': 'var(--detail-primary)',
        'detail-secondary': 'var(--detail-secondary)',
        'detail-dark': 'var(--detail-dark)',
        'detail-quaternary': 'var(--detail-quaternary)',

        /* Fondos */
        'background-light': 'var(--background-light)',
        'background-medium': 'var(--background-medium)',
        'background-dark': 'var(--background-dark)',

        /* Textos */
        'text-light': 'var(--text-light)',
        'text-medium': 'var(--text-medium)',
        'text-medium-dark': 'var(--text-medium-dark)',
        'text-dark': 'var(--text-dark)',
        'text-dark-2': 'var(--text-dark-2)',
        'text-accent': 'var(--text-accent)'
      },

      fontSize: {
        base: '1rem',
        sm: '0.875rem',
        lg: '1.125rem',
        xl: '1.5rem',
        xle: '1.8rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
        '4xl': '3rem'
      },

      maxWidth: {
        'container': '1400px'
      }
    }
  },

  plugins: []
}
