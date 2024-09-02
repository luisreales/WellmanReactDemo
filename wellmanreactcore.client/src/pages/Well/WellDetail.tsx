
import React, { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import {
    Box, Toolbar as MuiToolbar
} from '@mui/material';
import CreateButtonWithMenu from './../../components/form/CreateButtonWithMenu';
import MainTitle from './../../components/system/MainTitle';
import IconButton from './../../components/Activity/ActivityCard/Header/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton as BackButton } from '@mui/material';
import "./styleDetail.css";
import WellDashboard from "./WellDashboard";
import StatusIndicator from "../../components/Activity/ActivityCard/StatusIndicator";
import WellTabs from "./WellTabs";
import CreateWellModal from "./CreateWell";
import CreateActivityModal from "./CreateActivity";
import activitiesSource from "./../../data/Activities.json";

// WellData.ts
export interface WellData {
    activities?: any;
    cutOrFill?: number;
    geographicArea?: string;
    ground?: number;
    kbToGround?: number;
    status?: number;
    wellBores?: any;
    wellId?: number;
    wellLicenceNumber?: number;
    wellName?: string;
}

interface Activity {
    activityId: string;
    activityName: string;
    status: string;
    jobType: string;
    afeNumber: string;
    startDate: string;
    endDate: string;
    lastReport: string;
    calendar: string;
}

const WellDetail: React.FC = () => {
    const { wellId } = useParams<{ wellId: string }>();
    const [activities, setActivities] = useState<Activity[]>(activitiesSource as Activity[]);
    const [modalOpen, setModalOpen] = useState(false);
    const [activityModalOpen, setActivityModalOpen] = useState(false);
    const [updateActivities, setUpdateActivities] = useState(false);
  const navigate = useNavigate();
  const handleBackButtonClick = () => {
    navigate('/Wells'); 
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleActivityOpenModal = () => {
        setActivityModalOpen(true);
    };

    const handleActivityCloseModal = () => {
        setActivityModalOpen(false);
    };

    return (
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
         <MuiToolbar sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
             <Box sx={{ display: 'flex', alignItems: 'center' }}>
                 <BackButton aria-label="back" onClick={handleBackButtonClick}>
                     <ArrowBackIcon />
                 </BackButton>
                 <MainTitle text='WELL - RES DEMO HZ 05-26-032' />
             </Box>
             <div className="statusContainer">
                 <div className="statusLabel">Status</div>
                 <StatusIndicator status="Active" />
             </div>
             <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <CreateButtonWithMenu
                        onCreateWellClick={handleOpenModal}
                        onCreateActivityClick={handleActivityOpenModal}
                 />
                 <IconButton
                     iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b588d60689ddc5144466d9b667c66d8e7fe9e20fe55ad753b1a6ffb75153851a?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
                     alt="Location"
                 />
             </Box>
         </MuiToolbar>
         <WellDashboard wellId={wellId} />
            <WellTabs activities={activities}  />
            <CreateWellModal
                open={modalOpen}
                onClose={handleCloseModal}
                setUpdateActivities={setUpdateActivities}
                updateActivities={updateActivities}
            />
            <CreateActivityModal
                open={activityModalOpen}
                onClose={handleActivityCloseModal}
                activitiesProp={activities}
                setActivities={setActivities}
            />
      </div>
  );
}

export default WellDetail;