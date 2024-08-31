import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Controller, Control } from 'react-hook-form';

interface UnitInputProps {
    name: string;
    control: Control<any>;
    label: string;
    placeholder: string;
    unit: string;
    required?: boolean;
    error?: boolean;
    helperText?: string;
}

const UnitInput: React.FC<UnitInputProps> = ({ name, control, label, placeholder, unit, required = false, error, helperText }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <TextField
                    {...field}
                    variant="outlined"
                    placeholder={placeholder}
                    label={label}
                    required={required}
                    error={error}
                    helperText={helperText}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment
                                position="end"
                                sx={{
                                    paddingLeft: '8px',
                                    paddingRight: '8px',
                                    paddingTop: '5px',
                                    paddingBottom: '5px',
                                    borderRadius: '0 8px 8px 0',
                                    backgroundColor: '#f5f5f5',
                                    color: '#4a4a4a',
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '100%',
                                    borderLeft: '1px solid #e0e0e0',
                                }}
                            >
                                {unit}
                            </InputAdornment>
                        ),
                        style: {
                            paddingRight: '0px',
                        },
                    }}
                    sx={{
                        '& .MuiOutlinedInput-input': {
                            padding: '8px 14px',
                            fontSize: '0.8rem', // Ajustar el tamaño de la letra
                        },
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '8px', // Asegura que el borde sea consistente
                            '& fieldset': {
                                borderColor: '#e0e0e0',
                            },
                            '&:hover fieldset': {
                                borderColor: '#6C728F',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#6C728F',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#CCC',
                            fontSize: '0.8rem', // Ajustar el tamaño de la letra
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#333333',
                        },
                    }}
                />
            )}
        />
    );
};

export default UnitInput;
