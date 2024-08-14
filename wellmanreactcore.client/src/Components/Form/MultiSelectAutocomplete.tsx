import React from 'react';
import { Autocomplete, TextField, Chip } from '@mui/material';

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
    value: Item[];
    onChange: (selectedValues: Item[]) => void;
}

const MultiSelectAutocomplete: React.FC<MultiSelectProps> = ({ options, placeholder, value, onChange }) => {
    return (
        <Autocomplete
            multiple
            options={options}
            getOptionLabel={(option) => option.Text} 
            value={value}
            onChange={(event, newValue) => {
                onChange(newValue);
            }}
            renderTags={(selectedOptions, getTagProps) =>
                selectedOptions.map((option, index) => {
                    const { key, ...rest } = getTagProps({ index });
                    return (
                        <Chip
                            key={key} 
                            variant="outlined"
                            label={option.Text}
                            {...rest}
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
                />
            )}
            style={{ width: '100%' }}
        />
    );
};

export default MultiSelectAutocomplete;
