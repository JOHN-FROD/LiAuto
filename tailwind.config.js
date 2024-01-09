/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container : {
      padding: {
        DEFAULT: '1rem',
        md:'10px'
        // sm: '2rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
      center:true,
    },

    extend: {
      screens:{
        xs:"450px"
      },
      colors:{
        dark: '#191919',
        darkText:"#666",
        currentGold:'#dbad76',
        currentWhiteText: '#bababa',
        currentRed:"#e24208"
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
