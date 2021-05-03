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
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',

      // custom font size

      '70px': '70px',
      '63px': '63px',
      '37px': '37px',
      '35px': '35px',
      '31px': '31px',
      '26px': '26px',
      '20px': '20px',
      '19px': '19px',
      '18px': '18px',
      '17px': '17px',
      '16px': '16px',
      '13px': '13px',
     },
     letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',

      // custom letter spacing

      "p2pt": '2%',
      "m2pt": '-2%',
      "p15pt": '1.5%',
      "m15pt": '-1.5%',
      "p1pt": '1%',
      "m1pt": '-1%',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
