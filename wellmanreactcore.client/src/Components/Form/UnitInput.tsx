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

const UnitInput: React.FC<UnitInputProps> = ({ name, control, label, placeholder, unit, required = false, error,
    helperText, ...props }) => {
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
                                    padding: '15px',
                                    paddingTop: '27px',
                                    paddingBottom: '27px',
                                    borderRadius: '0 4px 4px 0',
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
                            paddingRight: '0px',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#e0e0e0 !important',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#CCC',
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#333333',
                        }
                    }}
                />
            )}
        />
    );
};

export default UnitInput;
