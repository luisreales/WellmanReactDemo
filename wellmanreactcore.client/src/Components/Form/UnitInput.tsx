import React from 'react';
import { TextField, InputAdornment } from '@mui/material';

interface UnitInputProps {
    label: string;
    placeholder: string;
    unit: string;
    value: string | number;
    required?: boolean;
    onChange: (value: string | number) => void;
}

const UnitInput: React.FC<UnitInputProps> = ({ label, placeholder, unit, value, required = false, onChange }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: '0px', padding: '0px' }}>
            {/*<label style={{ fontWeight: 'bold', color: '#555', marginBottom: '5px' }}>*/}
            {/*    {label} {required && <span style={{ color: 'red' }}>*</span>}*/}
            {/*</label>*/}
            <TextField
                variant="outlined"
                placeholder={placeholder}
                value={value}
                label={label}
                onChange={(e) => onChange(e.target.value)}
                required={required}
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
                }}
            />
        </div>
    );
};

export default UnitInput;
