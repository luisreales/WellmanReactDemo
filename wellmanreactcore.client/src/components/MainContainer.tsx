import { Route, Routes, Navigate } from 'react-router-dom';
import AllWellsTable from '../pages/Well/Index';
import Deposits from '../pages/Deposits';
import Orders from '../pages/Orders';
import { Container, Box, Toolbar } from '@mui/material';

const MainContainer: React.FC = () => {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
                width: '100%'
            }}
        >
            <Toolbar />

            <Container maxWidth={false} sx={{ width: '100%' }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/well" replace />} />
                    <Route path="/well" element={<AllWellsTable />} />
                    <Route path="/deposits" element={<Deposits />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </Container>

        </Box>
    );
};

export default MainContainer;
