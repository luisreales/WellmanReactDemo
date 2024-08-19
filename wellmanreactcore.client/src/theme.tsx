import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
    typography: {
        fontFamily: 'Be Vietnam Pro, sans-serif'
    },
    palette: {
        primary: {
            main: '#1B3BDA', // Blue/1000
            dark: '#2E6692', // Blue/1000 Dark
            light: '#6F8EFC', // Blue/700
            contrastText: '#FFFFFF', // Assuming white contrast for readability
        },
        secondary: {
            main: '#374957', // Grey Blue/1000
            dark: '#6C728F', // Grey Blue/900
            light: '#ABB6CC', // Grey Blue/700
            contrastText: '#FFFFFF', // Assuming white contrast for readability
        },
        background: {
            default: '#FFFF', // Grey Blue/50
            paper: '#FFFFFF', // Default white for paper backgrounds
        },
        text: {
            primary: '#333333', // Blue/1000 Dark
            secondary: '#374957', // Grey Blue/1000
        },
    },
});

export default defaultTheme;

