import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C62828",
    },
    secondary: {
      main: "#FFD700",
    },
    background: {
      default: "#FF7A00",
      paper: "#FF7A00",
    },
    text: {
      primary: "#FBF5F1",
      secondary: "#4A220F",
    },
    Lola: {
      main: "#ff9300",
      primary: "#ffde59"
    }
  },

  // Bordes globales
  shape: {
    borderRadius: 20,
  },


  customShapes: {
    wave: {
      height: {
        xs: 70,   // móvil
        sm: 90,
        md: 120, // desktop
      },
      path: `
        M0,40
        C120,80 240,0 360,20
        480,40 600,80 720,60
        840,40 960,0 1080,20
        1200,40 1320,80 1440,60
        L1440,120 L0,120 Z
      `,
    },
  },



});

export default theme;
