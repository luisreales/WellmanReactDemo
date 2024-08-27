import React, { useEffect, useState } from 'react';
import { Drawer, Box, Typography, CircularProgress } from '@mui/material';
import axiosInstance from './../../services/axios';
import BoxActivitySideGeneral from '../../components/Activity/BoxActivitySideGeneral/BoxActivitySideGeneral';
import ActivityCardHeader from '../../components/Activity/ActivityCard/ActivityCardHeader';
import DailyActivity from '../../components/Activity/DailyActivity/DailyActivity';

interface ActivityDetailsDrawerProps {
    activityId: string | null;
    open: boolean;
    onClose: () => void;
}

const ActivityDetailsDrawer: React.FC<ActivityDetailsDrawerProps> = ({ activityId, open, onClose }) => {
    const [wellDetails, setWellDetails] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [toggleDailyActivity, setToggleDailyActivity] = useState(false);

    const handleButtonClick = () => {
        setToggleDailyActivity(!toggleDailyActivity);
    };

    useEffect(() => {
        if (activityId) {
            setLoading(false);
            axiosInstance.get(`/Activity/${activityId}`)
                .then(response => {
                    setWellDetails(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching well details:", error);
                    setLoading(false);
                });
        }
    }, [activityId]);

    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box sx={{ width: '97%', p: 2 }}>
                {/*{loading ? (*/}
                {/*    <CircularProgress />*/}
                {/*) : wellDetails ? (*/}
                {/*        <div>*/}
                {/*            <ActivityCardHeader onClose={onClose} onClick={handleButtonClick}  />*/}
                {/*            <BoxActivitySideGeneral />*/}
                {/*            <Drawer anchor="right" open={toggleDailyActivity}>*/}
                {/*                <DailyActivity />*/}
                {/*            </Drawer>*/}
                {/*    </div>*/}
                {/*) : (*/}
                {/*    <Typography variant="body1">No details available.</Typography>*/}
                {/*)}*/}
                
                {   <div>
                        <ActivityCardHeader onClose={onClose} onClick={handleButtonClick} />
                        <BoxActivitySideGeneral />
                        <Drawer anchor="right" open={toggleDailyActivity}>
                            <DailyActivity />
                        </Drawer>
                    </div>
               }
            </Box>
        </Drawer>
    );
};

export default ActivityDetailsDrawer;