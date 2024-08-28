import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { TextField } from '@mui/material';

const MyDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Select Date"
                slotProps={{ textField: { size: 'small' } }}
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        size="small"
                        sx={{
                            '& .MuiInputBase-root': {
                                padding: '2px 4px', // Adjust the internal padding
                                backgroundColor: '#f5f5f5', // Custom background color
                                fontSize: '0.875rem', // Adjust font size
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#9e9e9e', // Border color
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#3f51b5', // Border color on hover
                            },
                            '& .MuiInputLabel-root': {
                                fontSize: '0.75rem', // Smaller label font size
                            },
                            minWidth: '150px', // Adjust width as necessary
                            marginTop: '0', // Remove extra margin or padding
                        }}
                    />
                )}
            />
        </LocalizationProvider>
    );
};

export default MyDatePicker;
