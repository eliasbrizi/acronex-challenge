import CustomAppBar from "./components/CustomAppBar";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "./resources/theme";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import { AppRoutes } from './components/AppRoutes'

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <CustomAppBar />
        <Router >
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
