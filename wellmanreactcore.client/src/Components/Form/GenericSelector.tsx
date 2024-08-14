import React, { useState } from 'react';
import { TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

interface SelectOption {
    value: string | number; // El valor asociado a la opción
    label: string;          // El texto que se mostrará en la opción
}

interface GenericSelectorProps {
    options: SelectOption[];    // Array de opciones a mostrar en el select
    placeholder: string;        // Placeholder para el TextField
    onSelect: (value: string | number) => void; // Callback cuando se selecciona una opción
}

const GenericSelector: React.FC<GenericSelectorProps> = ({ options, placeholder, onSelect }) => {
    const [selectedValue, setSelectedValue] = useState<string | number>('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const value = event.target.value as string | number;
        setSelectedValue(value);
        onSelect(value); // Llama al callback con el valor seleccionado
    };

    return (
        <FormControl variant="outlined" fullWidth>
            <InputLabel>{placeholder}</InputLabel>
            <Select
                value={selectedValue}
                onChange={handleChange}
                label={placeholder}
                fullWidth
            >
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default GenericSelector;
