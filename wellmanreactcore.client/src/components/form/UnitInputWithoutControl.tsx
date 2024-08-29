import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

interface UnitInputProps {
    name: string;
    label: string;
    placeholder: string;
    unit: string;
}

const UnitInputWithoutControl: React.FC<UnitInputProps> = ({ name, label, placeholder, unit }) => {
    return (
        <TextField
            name={name}
            variant="outlined"
            placeholder={placeholder}
            label={label}
            InputProps={{
                endAdornment: (
                    <InputAdornment
                        position="end"
                        sx={{
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            paddingTop: '10px',
                            paddingBottom: '10px',
                            borderRadius: '0 4px 4px 0',
                            backgroundColor: '#f5f5f5',
                            color: '#4a4a4a',
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                            borderLeft: '1px solid #e0e0e0',
                            fontSize: '10px'
                        }}
                    >
                        {unit}
                    </InputAdornment>
                ),
                style: {
                    paddingRight: '0px',
                    fontSize: '12px' // Adjust the font size for input text here if needed
                },
            }}
            sx={{
                '& .MuiOutlinedInput-input': {
                    paddingRight: '0px',
                    paddingTop: '2px',
                    paddingBottom: '2px',
                    fontSize: '0.7rem', // Set the desired font size
                    lineHeight: '1.5', // Set the desired line height
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#e0e0e0 !important',
                        fontSize: '0.7rem',
                    },
                },
                '& .MuiInputLabel-root': {
                    color: '#CCC',
                    fontSize: '10px',
                    lineHeight: '1.5', // Line height for the label
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#333333',
                    fontSize: '10px',
                    paddingBottom: '2px',
                },
                '& .MuiTypography-root': {
                    fontSize: '1rem', // Apply to Typography
                    lineHeight: '1.5',
                    color: '#374957',
                },
            }}
        />
    );
};

export default UnitInputWithoutControl;
