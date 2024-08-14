import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBarComponent from './components/AppBar';
import DrawerComponent from './components/Drawer';
import MainContainer from './components/MainContainer';
import defaultTheme from './theme';

const App: React.FC = () => {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Router>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBarComponent open={open} toggleDrawer={toggleDrawer} />
                    <DrawerComponent open={open} toggleDrawer={toggleDrawer} />
                    <MainContainer />
                </Box>
            </Router>
        </ThemeProvider>
    );
};

export default App;
