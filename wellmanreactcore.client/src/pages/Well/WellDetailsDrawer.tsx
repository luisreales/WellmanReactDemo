import React, { useEffect, useState } from 'react';
import { Drawer, Box, Typography, CircularProgress } from '@mui/material';
import axiosInstance from './../../services/axios';
import BoxActivitySideGeneral from '../../components/Activity/BoxActivitySideGeneral/BoxActivitySideGeneral';
import ActivityCardHeader from '../../components/Activity/ActivityCard/ActivityCardHeader';

interface WellDetailsDrawerProps {
    wellId: string | null;
    open: boolean;
    onClose: () => void;
}

const WellDetailsDrawer: React.FC<WellDetailsDrawerProps> = ({ wellId, open, onClose }) => {
    const [wellDetails, setWellDetails] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (wellId) {
            setLoading(true);
            axiosInstance.get(`/api/Well/${wellId}`)
                .then(response => {
                    setWellDetails(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching well details:", error);
                    setLoading(false);
                });
        }
    }, [wellId]);

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box sx={{ width: '97%', p: 2 }}>
                {loading ? (
                    <CircularProgress />
                ) : wellDetails ? (
                        <div>
                            <ActivityCardHeader onClose={onClose} />
                            <BoxActivitySideGeneral />
                    </div>
                ) : (
                    <Typography variant="body1">No details available.</Typography>
                )}
            </Box>
        </Drawer>
    );
};

export default WellDetailsDrawer;