/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          0: '#090b10',
          1: '#0f131a',
          surface: '#151b24',
        },
        text: {
          strong: '#f4f7fb',
          base: '#d1d9e6',
          muted: '#9ba7ba',
        },
        accent: '#18c2a4',
        danger: '#ff5b6e',
      },
      borderRadius: {
        sm: '10px',
        md: '16px',
        lg: '24px',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0, 0, 0, 0.28)',
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
