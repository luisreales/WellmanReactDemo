import React from "react";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface SelectOption {
  value: string | number;
  label: string;
}

interface GenericSelectorProps {
  options: SelectOption[];
  placeholder: string;
  name: string;
  control: Control<any>;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}

const GenericSelector: React.FC<GenericSelectorProps> = ({
  options,
  placeholder,
  name,
  control,
  required,
  error,
  helperText,
}) => {
  return (
    <FormControl variant="outlined" fullWidth error={error} required={required}>
      <InputLabel
        required={required}
        sx={{
          color: error ? "#d32f2f" : "#999",
          "&.Mui-focused": {
            color: error ? "#d32f2f" : "#333",
          },
          "& .MuiFormLabel-asterisk": {
            color: "#d32f2f", // Color del asterisco
            visibility: "visible", // Asegúrate de que el asterisco sea visible
          },
        }}
      >
        {placeholder}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            label={`${placeholder}${required ? ' *' : ''}`}
            fullWidth
            required={required}
            sx={{
              borderColor: error ? "#d32f2f" : "#ccc",
              borderRadius: "8px",
              "&.MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: error ? "#d32f2f" : "#ccc",
                },
                "&:hover fieldset": {
                  borderColor: error ? "#d32f2f" : "#333",
                },
                "&.Mui-focused fieldset": {
                  borderColor: error ? "#d32f2f" : "#333",
                },
              },
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default GenericSelector;
