"use client"
import { Lato } from "next/font/google"
import { createTheme } from "@mui/material/styles"

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
})

const theme = createTheme({
  typography: {
    fontFamily: lato.style.fontFamily,
    h1: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 400,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.6,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.7,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.7,
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.4,
    },
    button: {
      textTransform: "uppercase",
    },
  },
  palette: {
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#115293",
      contrastText: "#fff",
    },
    divider: "#000000",
    secondary: {
      main: "#dc004e",
      light: "#ff6f6b",
      dark: "#9a0036",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      light: "#e57373",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    warning: {
      main: "#ff9800",
      light: "#ffb74d",
      dark: "#f57c00",
      contrastText: "#000",
    },
    info: {
      main: "#2196f3",
      light: "#64b5f6",
      dark: "#1976d2",
      contrastText: "#fff",
    },
    success: {
      main: "#4caf50",
      light: "#81c784",
      dark: "#388e3c",
      contrastText: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#555",
      disabled: "#aaa",
    },
    background: {
      default: "#fafafa",
      paper: "#fff",
    },
  },
  spacing: 8, // Default spacing unit in px
  shape: {
    borderRadius: 4, // Default border radius
  },
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones, 600px and down)
      sm: 600, // Small devices (tablets, 600px and up)
      md: 960, // Medium devices (small laptops, 960px and up)
      lg: 1280, // Large devices (desktops, 1280px and up)
      xl: 1920, // Extra large devices (large desktops, 1920px and up)
    },
  },
  zIndex: {
    mobileStepper: 1000,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  components: {
    MuiButton: {
      // defaultProps: {
      //   variant: "contained", // Default variant
      // },
      styleOverrides: {
        root: {
          borderRadius: "4px",
          padding: "6px 16px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #ddd",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: "2.5rem",
          fontWeight: 700,
        },
        h2: {
          fontSize: "2rem",
          fontWeight: 700,
        },
      },
    },
  },
})

export default theme
