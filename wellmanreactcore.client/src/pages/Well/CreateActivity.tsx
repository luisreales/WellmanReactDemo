import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
    Modal,
    Box,
    Typography,
    FormControlLabel,
    Checkbox,
    Grid,
    Divider,
} from "@mui/material";
import { CircularProgress } from "@mui/material";
import CustomTextFieldComponent from "../../components/form/CustomTextField";
import { CreateButton, CancelButton } from "../../components/form/Button";
import axiosInstance from "../../services/axios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SuccessModal from "../../components/form/SuccessModal";
import ErrorModal from "../../components/form/ErrorModal";
import GenericSelector from "../../components/form/GenericSelector";
import MultiSelectAutocomplete from "../../components/form/MultiSelectAutocomplete";

const style = {
    fontFamily: "Be Vietnam Pro",
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 762,
    bgcolor: "background.paper",
    borderRadius: 2,
    maxHeight: "90vh",
    overflowY: "auto",
    padding:'0!important'
};

const headerStyle = {
    backgroundColor: "#E8EDFE",
    padding: "16px",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    marginBottom: "20px",
};

interface CreateActivityModalProps {
    open: boolean;
    onClose: () => void;
}

const activityTypeOptions = [
    { value: 1, label: "Well - Drilling" },
    { value: 2, label: "Well - Completion" },
    { value: 3, label: "Well - Construction" },
];

const afeOptions = [
    { value: 108000, label: "108000" },
    { value: 108001, label: "108001" },
    { value: 108004, label: "108004" },
];

const managerOptions = [
    { Id: "1", Text: "Aaron Wittmier", Data: "" },
    { Id: "2", Text: "Alister Salmon", Data: "" },
    { Id: "3", Text: "Aidan Deans", Data: "" },
    { Id: "4", Text: "Alex Villiger", Data: "" },
];

const schema = Yup.object().shape({
    name: Yup.string().required("Activity name is required"),
    drillingActivityCodeSet: Yup.string().required("Drilling activity code is required"),
    activityType: Yup.number()
        .required("Activity type is required")
        .positive("Must be a positive number"),
    afeNumber: Yup.number()
        .positive("Must be a positive number"),
    isManagedPressureDrilling: Yup.boolean(),
});

const CreateActivityModal: React.FC<CreateActivityModalProps> = ({ open, onClose }) => {
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [openErrorModal, setOpenErrorModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            drillingActivityCodeSet: "",
            activityType: 0,
            afeNumber: 0,
            isManagedPressureDrilling: false,
            activityManagers: [],
            fieldReportManagers: [],
        },
        mode: "onBlur",
    });

    const onSubmit = async (data: any) => {
        try {
            setLoading(true);
            const payload = {
                Name: data.name,
                DrillingActivityCodeSet: data.drillingActivityCodeSet,
                ActivityType: data.activityType,
                AfeNumber: data.afeNumber,
                IsManagedPressureDrilling: data.isManagedPressureDrilling,
                ActivityManagers: data.activityManagers.map((item: any) => item.Text).join(", "),
                FieldReportManagers: data.fieldReportManagers.map((item: any) => item.Text).join(", "),
            };

            const response = await axiosInstance.post(
                "/Activity",
                payload
            );

            setLoading(false);

            if (response.status === 200 && response.data) {
                setOpenSuccessModal(true);
                reset();
            } else if (response.data.error) {
                setOpenErrorModal(true);
            }
        } catch (error) {
            setLoading(false);
            console.error("Error sending data:", error);
            setOpenErrorModal(true);
        }
    };

    const handleCloseModal = () => {
        setOpenSuccessModal(false);
        setOpenErrorModal(false);
        onClose();
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="create-activity-modal-title"
                aria-describedby="create-activity-modal-description"
            >
                <Box sx={style}>
                    <Box sx={headerStyle}>
                        <Typography
                            style={{ fontFamily: "Be Vietnam Pro" }}
                            id="create-well-modal-title"
                            variant="h6"
                            component="h2"
                            sx={{ fontWeight: "bold" }}
                        >
                            Create Activity
                        </Typography>
                    </Box>
                    <Box sx={{ paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px' }} >
                    <Typography
                        style={{ fontFamily: "Be Vietnam Pro" }}
                        sx={{ color: "#555555", fontWeight: 500 }}
                    >
                        Complete the following form with the required information.
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid container spacing={2} sx={{ mt: 2 }}>
                            <Grid item xs={12}>
                                <CustomTextFieldComponent
                                    name="name"
                                    control={control}
                                    label="Activity Name"
                                    placeholder="Enter Activity Name"
                                    required
                                    error={!!errors.name}
                                    helperText={errors.name ? errors.name.message : ""}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <CustomTextFieldComponent
                                    name="drillingActivityCodeSet"
                                    control={control}
                                    label="Drilling Activity Code Set"
                                    placeholder="Enter Drilling Activity Code"
                                    required
                                    error={!!errors.drillingActivityCodeSet}
                                    helperText={
                                        errors.drillingActivityCodeSet
                                            ? errors.drillingActivityCodeSet.message
                                            : ""
                                    }
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <GenericSelector
                                    name="activityType"
                                    control={control}
                                    options={activityTypeOptions}
                                    placeholder="Activity Type"
                                    required
                                    error={!!errors.activityType}
                                    helperText={
                                        errors.activityType ? errors.activityType.message : ""
                                    }
                                />
                                </Grid>
                            <Grid item xs={6} sx={{ paddingTop: '20px' }}>
                                <GenericSelector
                                    name="afeNumber"
                                    control={control}
                                    options={afeOptions}
                                    placeholder="AFE Number"
                                    error={!!errors.afeNumber}
                                    helperText={
                                        errors.afeNumber ? errors.afeNumber.message : ""
                                    }
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={
                                        <Controller
                                            name="isManagedPressureDrilling"
                                            control={control}
                                            defaultValue={false}
                                            render={({ field }) => (
                                                <Checkbox {...field} checked={field.value} />
                                            )}
                                        />
                                    }
                                    label="Is Managed Pressure Drilling"
                                        sx={{
                                            color: "#555555", '& .MuiFormControlLabel-label': {
                                                fontSize: '0.7rem',
                                            }
                                        }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <MultiSelectAutocomplete
                                    name="activityManagers"
                                    control={control}
                                    options={managerOptions}
                                    placeholder="Activity Manager(s)"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <MultiSelectAutocomplete
                                    name="fieldReportManagers"
                                    control={control}
                                    options={managerOptions}
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
                    <SuccessModal
                        open={openSuccessModal}
                        onClose={handleCloseModal}
                        onYes={handleCloseModal}
                    />

                    <ErrorModal
                        open={openErrorModal}
                        onClose={handleCloseModal}
                        onYes={handleCloseModal}
                    />
                </Box>
            </Modal>
            {loading && (
                <div
                    style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
                >
                    <CircularProgress />
                </div>
            )}
        </>
    );
};

export default CreateActivityModal;
