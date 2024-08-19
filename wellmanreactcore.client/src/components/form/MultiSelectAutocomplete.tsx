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
                                        backgroundColor: '#CCC',
                                        color: '#000',
                                        '.MuiChip-deleteIcon': {
                                            color: '#000',
                                        }
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
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#333333',
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: '#e0e0e0 !important',
                                    },
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
