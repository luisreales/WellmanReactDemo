import { Route, Routes, Navigate } from 'react-router-dom';
import AllWellsTable from '../pages/Well/Index';
import { Container } from '@mui/material';
import WellDetail from '../pages/Well/WellDetail';


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
                    <Route path="/" element={<Navigate to="/Wells" replace />} />
                    <Route path="/Wells" element={<AllWellsTable />} />
                    <Route path="/WellDetail/:wellId" element={<WellDetail />} />
                </Routes>
            </Container>
    );
};

export default MainContainer;
