import { Route, Routes, Navigate } from 'react-router-dom';
import AllWellsTable from '../pages/Well/Index';
import Deposits from '../pages/Deposits';
import Orders from '../pages/Orders';
import { Container } from '@mui/material';

const MainContainer: React.FC = () => {
    return (
            <Container sx={{
                paddingLeft: '0px !important',
                paddingRight: '0px !important',
                maxWidth: '100% !important', 
                marginLeft: '0px !important',
                marginRight: '0px !important',
              }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/wells" replace />} />
                    <Route path="/wells" element={<AllWellsTable />} />
                    <Route path="/deposits" element={<Deposits />} />
                    <Route path="/orders" element={<Orders />} />
                </Routes>
            </Container>
    );
};

export default MainContainer;
