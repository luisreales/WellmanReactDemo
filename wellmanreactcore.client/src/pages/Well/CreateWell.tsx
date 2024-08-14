import React, { useState, useRef } from 'react';
import {
    Modal, Box, Typography, Button, FormControlLabel, Checkbox, Grid, FormControl, InputLabel, Select, MenuItem, Divider,
} from '@mui/material';
import CustomTextField from '../../components/Form/CustomTextField';
import GenericSelector from '../../components/Form/GenericSelector';
import GenericSearchSelector from '../../components/Form/GenericSearchSelector';
import MultiSelectAutocomplete from '../../components/Form/MultiSelectAutocomplete';
import UnitInput from '../../components/Form/UnitInput';
import geographicData from './../../data/GeographicAreas.json';
import userGroupList from './../../data/UserGroupList.json';
import emailRecipients from './../../data/EmailRecipients.json';


const style = {
    fontFamily: 'Be Vietnam Pro',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 762,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 2,
    p: 4,
    maxHeight: '90vh',
    overflowY: 'auto',
};

interface CreateWellModalProps {
    open: boolean;
    onClose: () => void;
}

const options = [
    { value: '', label: 'Select option' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
];

const CreateWellModal: React.FC<CreateWellModalProps> = ({ open, onClose }) => {
    const [createWellbore, setCreateWellbore] = useState(false);
    const [ground, setGround] = React.useState<string | number>('');
    const [cutOrFill, setCutOrFill] = React.useState<string | number>('');
    const [kbToGround, setKbToGround] = React.useState<string | number>('');


    const [selectedItems, setSelectedItems] = React.useState<Item[]>([]);
    const [selectedGroupItems, setSelectedGroupItems] = React.useState<Item[]>([]);

    const handleSave = () => {
        const dataToSend = selectedItems.map(item =>
            item.Data
        );
        console.log("Data to send:", dataToSend);
        // Aquí puedes hacer el envío a tu API
    };



    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCreateWellbore(event.target.checked);
    };

    const [wellStatus, setWellStatus] = useState('');

    const handleSelect = (value: string | number) => {
        setWellStatus(value as string);
    };


    return (
        <Modal
            
            open={open}
            onClose={onClose}
            aria-labelledby="create-well-modal-title"
            aria-describedby="create-well-modal-description"
        >
            <Box sx={style}>
                <Typography style={{ fontFamily: 'Be Vietnam Pro' }} id="create-well-modal-title" variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                    Create Well
                </Typography>
                <Typography style={{ fontFamily: 'Be Vietnam Pro' }} sx={{ mt: 2, color: '#555555', fontWeight: 500 }}>
                    Complete the following form with the required information.
                </Typography>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        <CustomTextField
                            label="Well Name"
                            placeholder="Name"
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <GenericSelector
                                options={options}
                                placeholder="Well status"
                                onSelect={handleSelect}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField
                            label="Well License Number *"
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Divider sx={{ my: 2 }} />
                        <FormControlLabel
                            control={<Checkbox checked={createWellbore} onChange={handleCheckboxChange} />}
                            label="Mark this check if you want to create a Wellbore"
                            sx={{ color: '#555555' }}
                        />
                    </Grid>

                    {createWellbore && (
                        <>
                            <Grid item xs={6}>
                                <CustomTextField
                                    label="Wellbore Name *"
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel>Wellbore Status *</InputLabel>
                                    <Select label="Wellbore Status" required>
                                        <MenuItem value=""><em>Select option</em></MenuItem>
                                        <MenuItem value={10}>Drilling</MenuItem>
                                        <MenuItem value={20}>Completed</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <CustomTextField
                                    label="Surface UWI *"
                                    required
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CustomTextField
                                    label="Bottom UWI *"
                                    required
                                />
                            </Grid>
                        </>
                    )}

                    <Grid item xs={12}>
                        <GenericSearchSelector
                            data={geographicData}
                            labelKey="Name"
                            childrenKey="Children"
                            placeholder="Geographic Area"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextField
                            label="AFE(s)"
                        />
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={12}>
                        <MultiSelectAutocomplete
                            options={emailRecipients}
                            placeholder="Select Email Reporting"
                            value={selectedItems}
                            onChange={setSelectedItems}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MultiSelectAutocomplete
                            options={userGroupList}
                            placeholder="User Gropus"
                            value={selectedGroupItems}
                            onChange={setSelectedGroupItems}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <UnitInput
                            label="Ground"
                            placeholder="Enter value"
                            unit="m"
                            value={ground}
                            required
                            onChange={setGround}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <UnitInput
                            label="Cut or fill"
                            placeholder="Enter value"
                            unit="m"
                            value={cutOrFill}
                            required
                            onChange={setCutOrFill}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <UnitInput
                            label="KB to Ground"
                            placeholder="Enter value"
                            unit="m"
                            value={kbToGround}
                            required
                            onChange={setKbToGround}
                        />
                    </Grid>
                </Grid>

                <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={handleSave}>
                        Create
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

export default CreateWellModal;
