import React from 'react';
import { Typography, Badge } from '@mui/material';
import { styled } from '@mui/system';

interface ActivitiesBadgeProps {
    text: string;
    number: number;
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -12, // Ajuste para alinear mejor con el texto
        top: 1, // Ajuste para alinear verticalmente
        //border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        backgroundColor: '#ffeaea',
        color: '#000',
        fontSize: '0.75rem',
        height: '18px',
        minWidth: '18px',
    },
}));

const ActivitiesBadge: React.FC<ActivitiesBadgeProps> = ({ text, number }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography
                variant="body2"
                sx={{
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: 1,
                    fontFamily: 'Be Vietnam Pro, -apple-system, Roboto, Helvetica, sans-serif',
                    textTransform: 'capitalize',
                    marginRight: '8px', // Espacio entre el texto y el badge
                }}
            >
                {text}
            </Typography>
            <StyledBadge badgeContent={number} />
        </div>
    );
};

export default ActivitiesBadge;
