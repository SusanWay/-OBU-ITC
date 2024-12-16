import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      blue: {
        light: '#00A5AD',
        DEFAULT: '#2962FF',
      },
      red: {
        DEFAULT: '#db3647',
        dark: '#952023',
      },
      grey: {
        light: '#D8DDDE',
        medium: '#809098',
        DEFAULT: '#2C4652',
      },
    },
    fontFamily: {
      sans: [
        'Roboto',
        'sans-serif',
      ],
    },
    fontSize: {
      sm: ['0.875rem', '1.125rem'],
      base: ['1rem', '1.3125rem'],
      h3: ['1.25rem', '1.5625rem'],
      h4: ['1rem', '1.3125rem'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1140px',
      '2xl': '1408px',
      '3xl': '1536px',
    },
    extend: {
      gridTemplateColumns: {
        header: '1fr auto 1fr',
      },
    },
    container: {
      screens: {
        'lg': '100%',
        '2xl': '1296px',
      },
    },
  },
}
