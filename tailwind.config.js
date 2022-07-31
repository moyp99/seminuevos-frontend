module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "769px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ["Mulish", "sans-serif"],
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      blue:'0px 2px 10px #09BBF3',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
     '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {
      colors: {
        primary: "#4A4D9D",
        secondary: "#DDEFFB",
        "custom-gray": "#D8EBEB",
        title: "#505050",
        text: "#727272",
        "text-alternative":'#565656',
        "simple-card-tag": "#9F9F9F",
        "cool-card-tag": "6c6c6c",
        dark: "#001A21",
        "light-blue": '#A5DBFF',
        
      },
      dropShadow: {
        'main-text': '0px 1px 10px #087E83',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
