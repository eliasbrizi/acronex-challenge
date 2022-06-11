import { createTheme } from "@mui/material/styles";

const theme = {
    palette: {
        type: 'light',
        primary: {
            main: '#4980cc',
        },
        secondary: {
            main: '#e13e5b',
        },
    },
}

export const Theme = () => createTheme(theme);