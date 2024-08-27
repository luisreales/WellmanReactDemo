
import React from "react";
import { useParams } from 'react-router-dom';
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

const WellDetail: React.FC = () => {
  const { wellId } = useParams<{ wellId: string }>();

    return (
        <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
         <MuiToolbar sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
             <Box sx={{ display: 'flex', alignItems: 'center' }}>
                 <BackButton aria-label="back">
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
                     onCreateWellClick={() => { }}
                     onCreateActivityClick={() => { }}
                 />
                 <IconButton
                     iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b588d60689ddc5144466d9b667c66d8e7fe9e20fe55ad753b1a6ffb75153851a?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
                     alt="Location"
                 />
             </Box>
         </MuiToolbar>
            <WellDashboard wellId={wellId} />
            <WellTabs />

      </div>
  );
}

export default WellDetail;