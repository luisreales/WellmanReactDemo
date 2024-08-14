import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/system';

// Personalizar el TextField
const CustomTextField = styled(TextField)(({ theme }) => ({
    '& label': {
        color: '#555555',
        fontWeight: '400'
    },
    '& label.Mui-focused': {
        color: '#555555',
    },
    '& .MuiInputBase-input': {
        color: '#9D9D9D',
        fontWeight: '400',
        lineHeight: '16px',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#B6C5DA',
            borderRadius: '8px',
        },
        '&:hover fieldset': {
            borderColor: '#6C728F',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6C728F',
        },
    },
    '& .MuiInputLabel-asterisk': {
        color: '#FF004D',
    },
}));

interface CustomTextFieldProps extends TextFieldProps {
    label: string;
    placeholder?: string;
    required?: boolean;
}

const CustomTextFieldComponent: React.FC<CustomTextFieldProps> = ({ label, placeholder, required, ...props }) => {
    return (
        <CustomTextField
            label={label}
            placeholder={placeholder}
            required={required}
            variant="outlined"
            fullWidth
            {...props}
        />
    );
};

export default CustomTextFieldComponent;
