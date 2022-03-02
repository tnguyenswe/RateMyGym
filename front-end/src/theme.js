const mainColors = {
    blue50: '#0096FF',
}

const theme = {
    mainColors,
    config: {
      useLocalStorage: false,
    },
    fonts: {
      body:
        '"Inter", sans-serif',
      heading: "inherit",
      monospace: "Menlo, monospace",
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
    fontWeights: {
      body: 400,
      heading: 700,
      bold: 700,
    },
    lineHeights: {
      body: 1.5,
      heading: 1.125,
    },
    breakpoints: ["576px", "768px", "992px", "1200px"],
    text: {
      headline: {
        fontWeight: "fontWeights.body",
      },
    },
    initialColorModeName: "light",
    colors: {
      titleText: '#1A202C',
      secondaryText: '#718096',
      text: "#1A202C",
      inverseText: "white",
      background: "white",
      navbar: "white",
      inverseBackground: "black",
      primary: "#3A6AD4",
      svgs: "#282C34",
      modes: {
        dark: {
          secondaryText: '#AFAFAF',
          titleText: 'white',
          text: "white",
          svgs: "#C4E0EB",
          inverseText: "black",
          background: "#282C34",
          navbar: "#161b21",
          inverseBackground: "white",
          primary: "#3A6AD4",
          cardOutline: 'white',
          pink50: '#0096FF',
        },
      },
    },
    buttons: {
      primary: {
        backgroundColor: "black",
        color: "white",
        fontSize: "16px",
      },
    },
    styles: {
      h1: {
        variant: "text.headline",
        fontSize: 8,
      },
      h2: {
        variant: "text.headline",
        fontSize: 7,
      },
      h3: {
        variant: "text.headline",
        fontSize: 6,
      },
      h4: {
        variant: "text.headline",
        fontSize: 5,
      },
      h5: {
        variant: "text.headline",
        fontSize: 4,
      },
      h6: {
        variant: "text.headline",
        fontSize: 3,
      },
      h7: {
        variant: "text.headline",
        fontSize: 2,
      },
      h8: {
        variant: "text.headline",
        fontSize: 1,
      },
      h9: {
        variant: "text.headline",
        fontSize: 0,
      },
      a: {},
    },
  };
  
  export default theme;
  