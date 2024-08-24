import React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const CustomTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Be Vietnam Pro',
    fontWeight: 600,
    fontSize: '24px',
    letterSpacing: '-1%',
    lineHeight: '30px',
}));

interface MainTitleProps {
    text: string;
}

const MainTitle: React.FC<MainTitleProps> = ({ text }) => {
    return (
        <CustomTypography>
            {text}
        </CustomTypography>
    );
}

export default MainTitle;