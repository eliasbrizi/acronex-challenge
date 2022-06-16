import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { AppRoutes } from './components/AppRoutes';
import CustomAppBar from "./components/CustomAppBar";
import { Theme } from "./resources/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <Router >
          <CustomAppBar />
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
