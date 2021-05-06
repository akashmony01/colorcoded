module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#9062BD',
        prmDark: '#523771',
        secondery: '#140C25',
      },
      fontFamily: {
        gpThin: ['Goldplay thin'],
        gpLight: ['Goldplay light'],
        gpRegular: ['Goldplay regular'],
        gpMedium: ['Goldplay medium'],
        gpSemiBold: ['Goldplay semi bold'],
        gpBold: ['Goldplay bold'],
        gpBlack: ['Goldplay black'],
      },

      // custom width
      spacing: {
        'phDesk': '181px',
        'phTab': '200px',
        'phSm': '300px',
        'phMob': '164px',
        '590px': '590px',
        '285px': '285px',
      }
    },

    // container customization

    container: (theme) => ({
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1172px"
      },
      padding: "1rem",
    }),
    
    fontSize: {
      'xs': '11px',
      'sm': '13px',
      'base': '16px',
      'lg': '17px',
      'xl': '18px',
      '2xl': '19px',
      '3xl': '20px',
      '4xl': '26px',
      '5xl': '31px',
      '6xl': '35px',
      '7xl': '37px',
      '8xl': '63px',
      '9xl': '70px',
     },
     
    letterSpacing: {
      tightest: '-2%',
      tighter: '-1.5%',
      tight: '-1%',
      normal: '0',
      wide: '1%',
      wider: '1.5%',
      widest: '2%',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
