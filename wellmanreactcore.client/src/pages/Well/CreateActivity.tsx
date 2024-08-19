import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Modal,
  Box,
  Typography,
  Button,
  Grid,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
} from "@mui/material";
import CustomTextFieldComponent from "../../components/form/CustomTextField";
import MultiSelectAutocomplete from "../../components/form/MultiSelectAutocomplete";
import { CreateButton, CancelButton } from "../../components/form/Button";

const style = {
  fontFamily: "Be Vietnam Pro",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 762,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  maxHeight: "90vh",
  overflowY: "auto",
};

interface CreateActivityModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateActivityModal: React.FC<CreateActivityModalProps> = ({ open, onClose }) => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Data to send:", data);
    // Aquí puedes hacer el envío a tu API
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="create-activity-modal-title"
      aria-describedby="create-activity-modal-description"
    >
      <Box sx={style}>
        <Typography
          style={{ fontFamily: "Be Vietnam Pro" }}
          id="create-activity-modal-title"
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold" }}
        >
          Activity
        </Typography>
        <Divider sx={{ my: 2 }} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Activity Type *</InputLabel>
                <Controller
                  name="activityType"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Activity Type *">
                      <MenuItem value="">
                        <em>Select option</em>
                      </MenuItem>
                      <MenuItem value="drilling">Well - Drilling</MenuItem>
                      <MenuItem value="completion">Well - Completion</MenuItem>
                      {/* Añade más opciones según sea necesario */}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Drilling Activity Code Set *</InputLabel>
                <Controller
                  name="drillingActivityCodeSet"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <Select {...field} label="Drilling Activity Code Set *">
                      <MenuItem value="">
                        <em>Select option</em>
                      </MenuItem>
                      {/* Añade opciones para el código de actividad */}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <CustomTextFieldComponent
                name="activityName"
                control={control}
                label="Activity Name"
                placeholder="Enter Activity Name"
                required
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Controller
                    name="isManagedPressureDrilling"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <Switch {...field} checked={field.value} />
                    )}
                  />
                }
                label="Is Managed Pressure Drilling?"
                sx={{ color: "#555555" }}
              />
            </Grid>

            <Grid item xs={12}>
              <CustomTextFieldComponent
                name="afeNumber"
                control={control}
                label="AFE #"
                placeholder="Enter AFE #"
                required
              />
            </Grid>

            <Grid item xs={12}>
              <MultiSelectAutocomplete
                name="wellbores"
                control={control}
                options={[]} 
                placeholder="Wellbore(s)"
              />
            </Grid>

            <Grid item xs={12}>
              <MultiSelectAutocomplete
                name="activityManagers"
                control={control}
                options={[]}
                placeholder="Activity Manager(s)"
              />
            </Grid>

            <Grid item xs={12}>
              <MultiSelectAutocomplete
                name="fieldReportManagers"
                control={control}
                options={[]}
                placeholder="Field Report Manager(s)"
              />
            </Grid>
          </Grid>
          
          <Divider sx={{ mt: 4 }} />
          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <CancelButton handleClose={onClose} />
            <CreateButton />
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default CreateActivityModal;
