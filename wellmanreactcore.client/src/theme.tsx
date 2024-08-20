import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
    typography: {
        fontFamily: 'Be Vietnam Pro, sans-serif'
    },
    palette: {
        primary: {
            main: '#1B3BDA',
            dark: '#2E6692',
            light: '#6F8EFC',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#374957',
            dark: '#6C728F',
            light: '#ABB6CC',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#FFFF',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#333333',
            secondary: '#374957',
        },
    },
});

export default defaultTheme;

