import * as React from "react";
import ReactDOM from "react-dom/client";
import Views from "./components/Views";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BlogProvider } from "./components/BlogContext";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1128,
      lg: 1488,
      xl: 1848,
    },
  },
  palette: {
    primary: {
      main: "#061221",
    },
    text: {
      primary: "#000000",
      secondary: "#7d7d7d",
    },
    background: {
      default: "#061221",
      paper: "#f4f4f4",
    },
    divider: "#7d7d7d",
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BlogProvider>
        <CssBaseline />
        <Views />
      </BlogProvider>
    </ThemeProvider>
  </React.StrictMode>
);
