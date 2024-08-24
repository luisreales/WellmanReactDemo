import React, { useState, useEffect } from "react";
import GenericTable from "../../components/GenericTable";
import CreateWellModal from "./CreateWell";
import CreateActivityModal from "./CreateActivity";
import axiosInstance from "../../services/axios";
import { CircularProgress } from "@mui/material";
import {
  parseWellStatus,
  convertGeographicArea,
} from "./../../utils/well/well-utils";
import WellIcon from "./../../assets/WellIcon";
import WellFilter from "./WellFilter";

const columns = [
  { id: "wellId", label: "Well ID", minWidth: 170 },
  { id: "wellName", label: "Well Name", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "wellLicenceNumber", label: "Well Licence Number", minWidth: 170 },
  { id: "geographicArea", label: "Geographic Area", minWidth: 170 },
  { id: "ground", label: "Ground", minWidth: 100 },
  { id: "cutOrFill", label: "Cut or Fill", minWidth: 100 },
  { id: "kbToGround", label: "KB to Ground", minWidth: 100 },
];

interface Well {
  wellId: number;
  wellName: string;
  status: number;
  wellLicenceNumber: number;
  geographicArea: string;
  ground: number;
  cutOrFill: number;
  kbToGround: number;
  wellBores: any;
}

const AllWellsTable: React.FC = () => {
  const [wells, setWells] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activityModalOpen, setActivityModalOpen] = useState(false);
  const [updateActivities, setUpdateActivities] = useState(false);
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    const fetchWells = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/api/Well");
        const transformedData = response.data.map((well: Well) => ({
          ...well,
          status: parseWellStatus(well.status),
          geographicArea: convertGeographicArea(well.geographicArea),
        }));
        setWells(transformedData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchWells();
  }, [updateActivities]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleActivityOpenModal = () => {
    setActivityModalOpen(true);
  };

  const handleActivityCloseModal = () => {
    setActivityModalOpen(false);
  };

  const handleFilterClick = () => {
    console.log("Filter button clicked");
  };

  return (
    <>
      <GenericTable
        title="All Wells"
        columns={columns}
        data={wells}
        icon={<WellIcon />}
        onCreateClick={handleOpenModal}
        onCreateActivityClick={handleActivityOpenModal}
        onFilterClick={handleFilterClick}
      >
         <WellFilter />
      </GenericTable>
      <CreateWellModal
        open={modalOpen}
        onClose={handleCloseModal}
        setUpdateActivities={setUpdateActivities}
        updateActivities={updateActivities}
      />
      <CreateActivityModal
        open={activityModalOpen}
        onClose={handleActivityCloseModal}
      />
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px 0",
          }}
        >
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default AllWellsTable;
