import React from 'react';
import { Autocomplete, TextField, Chip } from '@mui/material';
import { Controller, Control } from 'react-hook-form';

interface Item {
    Id: string;
    Text: string;
    Data: string | {
        EmailReportingId: string;
        EmailReportingName: string;
    };
}

interface MultiSelectProps {
    options: Item[];
    placeholder: string;
    control: Control<any>;
    name: string;
}

const MultiSelectAutocomplete: React.FC<MultiSelectProps> = ({ options, placeholder, control, name }) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field }) => (
                <Autocomplete
                    multiple
                    options={options}
                    getOptionLabel={(option) => option.Text}
                    value={field.value || []}
                    onChange={(event, newValue) => {
                        field.onChange(newValue);
                    }}
                    isOptionEqualToValue={(option, value) => option.Id === value.Id}
                    renderTags={(selectedOptions, getTagProps) =>
                        selectedOptions.map((option, index) => {
                            const { key, ...rest } = getTagProps({ index });
                            return (
                                <Chip
                                    key={key}
                                    variant="outlined"
                                    label={option.Text}
                                    {...rest}
                                    sx={{
                                        backgroundColor: '#E8EDFE',
                                        color: '#333',
                                        fontSize: '0.8rem',
                                        height: '24px',
                                        '.MuiChip-deleteIcon': {
                                            color: '#000',
                                        },
                                    }}
                                />
                            );
                        })
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="outlined"
                            label={placeholder}
                            placeholder={placeholder}
                            sx={{
                                '& .MuiInputLabel-root': {
                                    color: '#CCC',
                                    fontSize: '0.8rem',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#333',
                                },
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    '& fieldset': {
                                        borderColor: '#B6C5DA',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: '#6C728F',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#6C728F',
                                    },
                                },
                                '& .MuiOutlinedInput-input': {
                                    padding: '8px 14px',
                                    fontSize: '0.8rem',
                                },
                            }}
                        />
                    )}
                    style={{ width: '100%' }}
                />
            )}
        />
    );
};

export default MultiSelectAutocomplete;
