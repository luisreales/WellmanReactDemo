import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, SelectProps, OutlinedInput } from '@mui/material';
import { styled } from '@mui/system';

const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
    borderRadius: '8px',
    borderColor: '#B6C5DA',
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#B6C5DA',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#B6C5DA',
    },
}));

const CustomSelect = styled(Select)(({ theme }) => ({
    '& .MuiInputLabel-root': {
        color: '#555555',
        fontWeight: '400',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#555555',
    },
    '& .MuiSelect-select': {
        color: '#9D9D9D',
        fontWeight: '400',
        lineHeight: '16px',
    },
    '& .MuiSvgIcon-root': {
        color: '#6C728F',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#B6C5DA',
            borderRadius: '8px',
        },
        '&:hover fieldset': {
            borderColor: '#B6C5DA',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#B6C5DA',
        },
    }
}));

interface CustomSelectComponentProps extends SelectProps {
    label: string;
    options: Array<{ value: string; label: string }>;
    required?: boolean;
    value: string;
}

const CustomSelectComponent: React.FC<CustomSelectComponentProps> = ({ label, options, required, ...props }) => {
    return (
        <FormControl fullWidth variant="outlined">
            <InputLabel required={required}>{label}</InputLabel>
            <CustomSelect

                input={<CustomOutlinedInput />}
                {...props}

            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </CustomSelect>
        </FormControl>
    );
};

export default CustomSelectComponent;
