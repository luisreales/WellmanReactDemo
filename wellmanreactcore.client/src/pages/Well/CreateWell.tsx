import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Modal,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Grid,
  FormControl,
  Divider,
} from "@mui/material";
import GenericSelector from "../../components/form/GenericSelector";
import GenericSearchSelector from "../../components/form/GenericSearchSelector";
import MultiSelectAutocomplete from "../../components/form/MultiSelectAutocomplete";
import UnitInput from "../../components/form/UnitInput";
import geographicData from "./../../data/GeographicAreas.json";
import userGroupList from "./../../data/UserGroupList.json";
import emailRecipients from "./../../data/EmailRecipients.json";
import CustomTextFieldComponent from "../../components/form/CustomTextField";
import { CreateButton, CancelButton } from "../../components/form/Button";
import axiosInstance from "../../services/axios";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SuccessModal from "../../components/form/SuccessModal";
import ErrorModal from "../../components/form/ErrorModal";

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

interface CreateWellModalProps {
  open: boolean;
  onClose: () => void;
}

interface Item {
  Text: string;
  Data: string;
  Id: string;
}

const options = [
  { value: "", label: "Select option" },
  { value: 1, label: "Active" },
  { value: 2, label: "InActive" },
  { value: 3, label: "PluggedAndAbandoned" },
  { value: 4, label: "Reclaimed" },
  { value: 5, label: "Abandoned" },
  { value: 6, label: "AbandonedAndReEntered" },
];

const schema = Yup.object().shape({
  wellName: Yup.string().required("Well name is required"),
  wellstatus: Yup.string().required("Well status is required"),
/*    wellLicenseNumber: Yup.string().required("License number is required"),*/
  wellLicenseNumber: Yup.number()
        .required("License number is required")
        .positive("Must be a positive number"),
  createWellbore: Yup.boolean(),
    wellboreName: Yup.string().when("createWellbore", {
        is: (value: boolean) => value === true,
        then: (schema) => schema.required("Wellbore name is required"),
        otherwise: (schema) => schema.notRequired(),
    }),
    wellboreStatus: Yup.string().when("createWellbore", {
        is: (value: boolean) => value === true,
        then: (schema) => schema.required("Wellbore status is required"),
        otherwise: (schema) => schema.notRequired(),
    }),
    surfaceUWI: Yup.string().when("createWellbore", {
        is: (value: boolean) => value === true,
        then: (schema) => schema.required("Surface UWI is required"),
        otherwise: (schema) => schema.notRequired(),
    }),
    bottomUWI: Yup.string().when("createWellbore", {
        is: (value: boolean) => value === true,
        then: (schema) => schema.required("Bottom UWI is required"),
        otherwise: (schema) => schema.notRequired(),
    }),
  geographicData: Yup.object().shape({
    NodePath: Yup.string().required("Geographic area is required"),
  }),
  ground: Yup.number()
    .required("Ground value is required")
    .positive("Must be a positive number"),
  cutOrFill: Yup.number()
    .required("Cut or fill value is required")
    .positive("Must be a positive number"),
  kbToGround: Yup.number()
    .required("KB to Ground value is required")
    .positive("Must be a positive number"),
});

const CreateWellModal: React.FC<CreateWellModalProps> = ({ open, onClose }) => {
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const {
    control,
    handleSubmit,

    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      wellName: "",
      wellstatus: "",
      wellLicenseNumber: "",
      createWellbore: false,
      wellboreName: "",
      wellboreStatus: "",
      surfaceUWI: "",
      bottomUWI: "",
      geographicData: {
        NodePath: "",
      },
      ground: 0,
      cutOrFill: 0,
      kbToGround: 0,
    },
    mode: "onBlur",
  });

  console.log("errores", errors);

  const createWellbore = watch("createWellbore");

  const onSubmit = async (data: any) => {
    try {
      const payload = {
        WellName: data.wellName,
        WellStatus: data.wellstatus,
        WellLicenseNumber: data.wellLicenseNumber,
        CreateWellbore: data.createWellbore,
        ...(data.createWellbore && {
          WellboreName: data.wellboreName,
          WellboreStatus: data.wellboreStatus,
          SurfaceUWI: data.surfaceUWI,
          BottomUWI: data.bottomUWI,
        }),
        GeographicArea: data.geographicData?.NodePath,
        Afe: data.afe,
        EmailReporting: data.emailReporting
          .map((item: Item) => item.Text)
          .join(","),
        UserGroups: data.userGroups.map((item: Item) => item.Text).join(","),
        Ground: parseInt(data.ground, 10),
        CutOrFill: parseInt(data.cutOrFill, 10),
        KBToGround: parseInt(data.kbToGround, 10),
      };
      console.log("payload:", payload);
      const response = await axiosInstance.post(
        "/api/Well/createWell",
        payload
      );
        console.log("Response:", response.data);
        debugger;
      if (response.status === 200 && response.data) {
        setOpenSuccessModal(true);
      } else if (response.data.error === "Well license number already exists") {
        setOpenErrorModal(true);
      }
    } catch (error) {
      console.error("Error sending data:", error);
      setOpenErrorModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenSuccessModal(false);
    setOpenErrorModal(false);
  };

  const handleSuccessYes = () => {
    handleCloseModal();
    console.log("Create activity for well");
  };

  const handleErrorYes = () => {
    handleCloseModal();
    console.log("Redirect to existing well");
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="create-well-modal-title"
      aria-describedby="create-well-modal-description"
    >
      <Box sx={style}>
        <Typography
          style={{ fontFamily: "Be Vietnam Pro" }}
          id="create-well-modal-title"
          variant="h6"
          component="h2"
          sx={{ fontWeight: "bold" }}
        >
          Create Well
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography
          style={{ fontFamily: "Be Vietnam Pro" }}
          sx={{ mt: 2, color: "#555555", fontWeight: 500 }}
        >
          Complete the following form with the required information.
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <CustomTextFieldComponent
                name="wellName"
                control={control}
                label="Well Name"
                placeholder="Enter Well Name"
                required
                error={!!errors.wellName}
                helperText={errors.wellName ? errors.wellName.message : ""}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <GenericSelector
                  name="wellstatus"
                  control={control}
                  options={options}
                  placeholder="Select well status"
                  required={true}
                  error={!!errors.wellstatus}
                  helperText={
                    errors.wellstatus ? errors.wellstatus.message : ""
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <CustomTextFieldComponent
                name="wellLicenseNumber"
                control={control}
                label="Well License Number"
                placeholder="Well License Number"
                required
                error={!!errors.wellLicenseNumber}
                helperText={
                  errors.wellLicenseNumber
                    ? errors.wellLicenseNumber.message
                    : ""
                }
              />
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <FormControlLabel
                control={
                  <Controller
                    name="createWellbore"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <Checkbox {...field} checked={field.value} />
                    )}
                  />
                }
                label="Mark this check if you want to create a Wellbore"
                sx={{ color: "#555555" }}
              />
            </Grid>

            {createWellbore && (
              <>
                <Grid item xs={6}>
                  <CustomTextFieldComponent
                    name="wellboreName"
                    control={control}
                    label="Wellbore Name"
                    placeholder="Wellbore Name *"
                    required
                    error={!!errors.wellboreName}
                    helperText={
                      errors.wellboreName ? errors.wellboreName.message : ""
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <GenericSelector
                    name="wellboreStatus"
                    control={control}
                    options={options}
                    placeholder="Select Wellbore Status"
                    required
                    error={!!errors.wellboreStatus}
                    helperText={
                      errors.wellboreStatus ? errors.wellboreStatus.message : ""
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextFieldComponent
                    name="surfaceUWI"
                    control={control}
                    label="Surface UWI"
                    placeholder="Surface UWI"
                    required
                    error={!!errors.surfaceUWI}
                    helperText={
                      errors.surfaceUWI ? errors.surfaceUWI.message : ""
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <CustomTextFieldComponent
                    name="bottomUWI"
                    control={control}
                    label="Bottom UWI"
                    placeholder="Bottom UWI"
                    required
                    error={!!errors.bottomUWI}
                    helperText={
                      errors.bottomUWI ? errors.bottomUWI.message : ""
                    }
                  />
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <GenericSearchSelector
                name="geographicData"
                control={control}
                data={geographicData}
                labelKey="Name"
                childrenKey="Children"
                placeholder="Geographic Area"
                required
                error={!!errors.geographicData}
                helperText={
                  errors.geographicData ? errors.geographicData.message : ""
                }
              />
            </Grid>
            <Grid item xs={6}>
              <CustomTextFieldComponent
                name="afe"
                control={control}
                label="AFE(s)"
                placeholder="AFE(s)"
              />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={12}>
              <MultiSelectAutocomplete
                name="emailReporting"
                control={control}
                options={emailRecipients}
                placeholder="Select Email Reporting"
              />
            </Grid>
            <Grid item xs={12}>
              <MultiSelectAutocomplete
                name="userGroups"
                control={control}
                options={userGroupList}
                placeholder="User Groups"
              />
            </Grid>
            <Grid item xs={4}>
              <UnitInput
                name="ground"
                control={control}
                label="Ground"
                placeholder="Enter value"
                unit="m"
                required
                error={!!errors.ground}
                helperText={errors.ground ? errors.ground.message : ""}
              />
            </Grid>
            <Grid item xs={4}>
              <UnitInput
                name="cutOrFill"
                control={control}
                label="Cut or fill"
                placeholder="Enter value"
                unit="m"
                required
                error={!!errors.cutOrFill}
                helperText={errors.cutOrFill ? errors.cutOrFill.message : ""}
              />
            </Grid>
            <Grid item xs={4}>
              <UnitInput
                name="kbToGround"
                control={control}
                label="KB to Ground"
                placeholder="Enter value"
                unit="m"
                required
                error={!!errors.kbToGround}
                helperText={errors.kbToGround ? errors.kbToGround.message : ""}
              />
            </Grid>
          </Grid>
          <Divider sx={{ mt: 4 }} />
          <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
            <CancelButton handleClose={onClose} />
            <CreateButton />
          </Box>
        </form>
        <SuccessModal
          open={openSuccessModal}
          onClose={handleCloseModal}
          onYes={handleSuccessYes}
        />

        <ErrorModal
          open={openErrorModal}
          onClose={handleCloseModal}
          onYes={handleErrorYes}
        />
      </Box>
    </Modal>
  );
};

export default CreateWellModal;
