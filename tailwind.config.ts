import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 白金冷調色系 - 帶有微妙的銀藍冷色調
        platinum: {
          50: '#f8f9fb',   // 極淺帶藍白
          100: '#f1f3f6',  // 淺銀白
          200: '#e2e6ec',  // 銀灰
          300: '#c9d0da',  // 冷銀
          400: '#9ba5b5',  // 冷灰藍
          500: '#6b7789',  // 中性冷灰
          600: '#4a5568',  // 深冷灰
          700: '#374151',  // 暗冷灰
          800: '#1f2937',  // 深邃冷調
          900: '#111827',  // 接近黑的冷調
          950: '#0a0f18',  // 極深冷黑
        },
        // 輔助冷色調
        frost: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
        },
        // 金色點綴 - 低調奢華的白金感
        gold: {
          50: '#fdfcf9',   // 極淺金白
          100: '#f9f6ef',  // 淺香檳
          200: '#f0e9d8',  // 淡金
          300: '#e5d9bc',  // 香檳金
          400: '#d4c49a',  // 柔金
          500: '#b8a172',  // 古銅金
          600: '#9a7f4e',  // 深金
          700: '#7a6340',  // 暗金
          800: '#5c4a30',  // 深褐金
          900: '#3d3120',  // 極深金
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
