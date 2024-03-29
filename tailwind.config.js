const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  important: true,

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxsm: "375px",
      xsm: "500px",
      ...defaultTheme.screens,
    },
    borderWidth: {
      10: "10px",
      15: "15px",
    },
    rotate: { 
      '12': "12deg" ,
      '-12': "-12deg" ,
      '-18': "-18deg" ,
      '18': "18deg" ,
      '25': "25deg" ,
      '30': "30deg" ,
      '45': "45deg" ,
      '90': "90deg" 
    },
    extend: {
      screens: {},
      colors: {
        red: "#d71d24",
        pink: "#D70F64",
        green: "#5EFFB6",
        black: "#2a2c2a",
        yellow: "#fdd040",
        orange: "##E5E5E5",
        skin: "#ffeed8",
        blue: "#2b28c1",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },
      height: {
        wFull: "100vw",
        '70vh': "70vh",
        '80vh': "80vh",
        '90vh': "90vh",
        '30vh': "30vh",
        '32': "34vw",
        '370': "370px",
      },
      width: {
        "1/7": "14.2857143%",
        "2/7": "28.5714286%",
        "3/7": "42.8571429%",
        "4/7": "57.1428571%",
        "5/7": "71.4285714%",
        "6/7": "85.7142857%",
      },
      maxWidth:{
        1200:"1200px"
      },
      padding: {
        '140': '140%',
        '1/4': '25%',
        '1/10': '10%',
        '1/20': '5%',
       },
      inset: {
        '1/20': '5%',
        '1/10': '10%',
        '-1/10': '-10%',
        '1/6': '16%',
        '1/5': '20%',
        '-1/5': '-20%',
        '-2/5': '-40%',
        '1/4': '25%',
        '1/2': '50%',
        '3/5': '60%',
        '8/12': '66%',
       },
       margin: {
        '-1/2': '-50%',
        '-2/5': '-40%',
        '-1/3': '-30%',
        '-1/4': '-25%',
        '-1/6': '-15%',
        '-1/10': '-10%',
        '-1/20': '-5%',
        '1/6': '15%',
        '1/2': '50%',
        '3/5': '60%',
        '1/3': '33%',
        '1/4': '25%',
        '1/5': '20%',
        '1/10': '10%',
        '1/20': '5%',
        '19%': '19%',
       },
       fontSize: {
        '7.5xl': '5rem',
        '1vw': '1vw',
        '2vw': '2vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '6vw': '6vw',
        '7vw': '7vw',
        '8vw': '8vw',
        '9vw': '9vw',
        '10vw': '10vw',
        '14vw': '14vw',
       }
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },

    borderRadius: {
      ...defaultTheme.borderRadius,
      'custom': '53px',
    }
   
  },
  variants: {
    extend: {
      display: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
}
