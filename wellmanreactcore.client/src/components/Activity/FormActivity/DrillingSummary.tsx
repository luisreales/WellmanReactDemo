import React from 'react';
import { Box, TextField, Typography, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const DrillingSummary: React.FC = () => {
    // Mock data
    const mockData = {
        depthMD: 4518,
        depthTVD: 3600,
        wellboreTotalDepth: 4520,
        firstDriftString: 5000,
        lastHoleSecBotDepth: 4518,
        weatherCondition: '',
        windDirection: '',
        windSpeedRange: '',
        roadCondition: '',
        stage: '',
        temperature: -22
    };

    return (
        <Box sx={{ padding: '20px' }}>
            {/* Depths Summary */}
            <Typography variant="h6" gutterBottom>Depths Summary</Typography>
            <Typography variant="body2" gutterBottom>
                These are optional. If entered, these values will override the calculated depths from Drill Strings and will be the values displayed on the Daily Drilling Report.
            </Typography>
            <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={3}>
                    <TextField label="Depth (MD) at 24:00" value={mockData.depthMD} fullWidth InputProps={{ readOnly: true }} />
                </Grid>
                <Grid item xs={3}>
                    <TextField label="Depth (TVD) at 24:00" value={mockData.depthTVD} fullWidth InputProps={{ readOnly: true }} />
                </Grid>
                <Grid item xs={3}>
                    <TextField label="Wellbore Total Depth (MD)" value={`${mockData.wellboreTotalDepth}KB`} fullWidth InputProps={{ readOnly: true }} />
                </Grid>
                <Grid item xs={3}>
                    <TextField label="Depth (MD) First Drift String" value={`${mockData.firstDriftString} m`} fullWidth InputProps={{ readOnly: true }} />
                </Grid>
            </Grid>

            {/* Daily Summary */}
            <Typography variant="h6" gutterBottom>Daily Summary</Typography>
            {['Operations at 6:00', '12 Hours Summary', '24 Hours Forecast', 'Remarks'].map((label, index) => (
                <TextField
                    key={index}
                    label={label}
                    placeholder={`Write your ${label.toLowerCase()}`}
                    fullWidth
                    multiline
                    rows={3}
                    sx={{ mb: 2 }}
                />
            ))}

            {/* Casing and Conditions */}
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <TextField label="Next Casing OD" value={mockData.depthMD} fullWidth InputProps={{ readOnly: true }} />
                </Grid>
                <Grid item xs={2}>
                    <TextField label="Next Casing Landed D" value={mockData.depthTVD} fullWidth InputProps={{ readOnly: true }} />
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel>Next casing formation Landed in</InputLabel>
                        <Select value={mockData.weatherCondition} label="Next casing formation Landed in">
                            <MenuItem value=""><em>None</em></MenuItem>
                            {/* Add more options as necessary */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <TextField label="Last Meter Drilled" placeholder="min" fullWidth />
                </Grid>
                <Grid item xs={2}>
                    <TextField label="SL Meter Drilled" placeholder="min" fullWidth />
                </Grid>
                <Grid item xs={2}>
                    <TextField label="Third L" placeholder="min" fullWidth />
                </Grid>
            </Grid>

            {/* Conditions */}
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>Conditions</Typography>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel>Weather Condition</InputLabel>
                        <Select value={mockData.weatherCondition} label="Weather Condition">
                            <MenuItem value=""><em>Select an option</em></MenuItem>
                            {/* Add more options as necessary */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel>Wind Direction</InputLabel>
                        <Select value={mockData.windDirection} label="Wind Direction">
                            <MenuItem value=""><em>Select an option</em></MenuItem>
                            {/* Add more options as necessary */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel>Wind Speed Range</InputLabel>
                        <Select value={mockData.windSpeedRange} label="Wind Speed Range">
                            <MenuItem value=""><em>Select an option</em></MenuItem>
                            {/* Add more options as necessary */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel>Road Condition</InputLabel>
                        <Select value={mockData.roadCondition} label="Road Condition">
                            <MenuItem value=""><em>Select an option</em></MenuItem>
                            {/* Add more options as necessary */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <FormControl fullWidth>
                        <InputLabel>Stage</InputLabel>
                        <Select value={mockData.stage} label="Stage">
                            <MenuItem value=""><em>Select an option</em></MenuItem>
                            {/* Add more options as necessary */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <TextField label="Temperature" value={mockData.temperature} fullWidth InputProps={{ readOnly: true, endAdornment: <span>°C</span> }} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default DrillingSummary;
