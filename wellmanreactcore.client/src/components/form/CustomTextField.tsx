import React from 'react';
import { TextFieldProps } from '@mui/material';
import { styled } from '@mui/system';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

// Personalizar el TextField
const CustomTextField = styled(TextField)(({ theme }) => ({
    '& label': {
        color: '#CCC',
        fontWeight: '300',
        fontSize: '0.8rem',
        top: '-5px'
    },
    '& label.Mui-focused': {
        color: '#555555',
    },
    '& .MuiInputBase-input': {
        color: '#9D9D9D',
        fontWeight: '300',
        lineHeight: '16px',
        fontSize: '0.8rem',
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
    '& .MuiOutlinedInput-input': {
        paddingRight: '0px',
        paddingTop: '10.5px',
        paddingBottom: '10.5px'
    }
}));



interface CustomTextFieldProps extends TextFieldProps {
    label: string;
    placeholder?: string;
    required?: boolean;
    name: string;
    control: any;
    error?: boolean;
    helperText?: string;
}

const CustomTextFieldComponent: React.FC<CustomTextFieldProps> = ({ label, placeholder, required, name, control, error,
    helperText, ...props }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <CustomTextField
                    {...field}
                    label={label}
                    placeholder={placeholder}
                    required={required}
                    variant="outlined"
                    fullWidth
                    error={error}
                    helperText={helperText}
                    {...props}
                />
            )}
        />
    );
};

export default CustomTextFieldComponent;
