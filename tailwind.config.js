/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        yt: {
          red: '#ff0000',
          dark: '#0f0f0f',
          surface: '#1a1a1a',
          elevated: '#272727',
          border: '#3f3f3f',
          text: '#f1f1f1',
          muted: '#aaaaaa',
        },
        danger: {
          DEFAULT: '#ef4444',
          bg: 'rgba(239,68,68,0.15)',
          border: 'rgba(239,68,68,0.6)',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'danger': 'dangerPulse 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.25s ease-out forwards',
      },
      keyframes: {
        dangerPulse: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '0.8' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'scale(0.98)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
      },
      aspectRatio: {
        '16/9': '16 / 9',
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [],
}
