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
    activityData: GeneralSectionProps;
}

interface GeneralSectionProps {
    estimated?: string;
    actual?: string;
    AFEestimated?: string;
    activityCost?: string;
    lastApprovedDate: string;
    lastSubmitDate: string;
    daysToBeApproved: number;
    daysToBeReleased: number;
    daysRejected: number;
    daysRefused: number;
    daysToSubmit: number;
    operator: string;
    license: string;
    surface: string;
    estimatedTD: string;
    currentDepth: string;
    rigName: string;
    afeNumber: string;
    costPerMeter: string;
    fieldManager: string;
    daysDetails: {
        dayNumber: number;
        date: string;
        lastEdited: string;
        reviewStatus: string;
    }[];
    wellboresData: {
        name: string;
        status: string;
        trajectory: string;
        parent: string;
    }[];
}

const ActivityDetailsDrawer: React.FC<ActivityDetailsDrawerProps> = ({ activityId, open, onClose, activityData }) => {
    const [wellDetails, setWellDetails] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [toggleDailyActivity, setToggleDailyActivity] = useState(false);

    const handleButtonClick = () => {
        setToggleDailyActivity(!toggleDailyActivity);
    };

    const handleClose = () => {
        setToggleDailyActivity(false);
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
        <Drawer open={open} onClose={onClose} sx={{ width: '100%', height: '100%', '& .MuiDrawer-paper': { width: '100%', height: '100%' } }}>
            <Box sx={{ width: '96%', height: '100%', p: 2 }}>
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
                    <ActivityCardHeader onClose={onClose} onClick={handleButtonClick}  />
                    <BoxActivitySideGeneral activityData={activityData} />
                    <Drawer anchor="right" open={toggleDailyActivity} onClose={handleClose}>
                        <DailyActivity onClose={handleClose} />
                        </Drawer>
                    </div>
               }
            </Box>
        </Drawer>
    );
};

export default ActivityDetailsDrawer;