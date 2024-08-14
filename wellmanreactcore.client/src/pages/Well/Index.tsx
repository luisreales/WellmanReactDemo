import React, { useState } from 'react';
import GenericTable from '../../components/GenericTable';
import CreateWellModal from './CreateWell';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'bottomUWI', label: 'Bottom UWI', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 100 },
    { id: 'surfaceUWI', label: 'Surface UWI', minWidth: 100 },
    { id: 'spudDate', label: 'Spud Date', minWidth: 170 },
    { id: 'hierarchy', label: 'Hierarchy', minWidth: 170 },
    { id: 'geography', label: 'Geography', minWidth: 170 },
    { id: 'fluidType', label: 'Fluid Type', minWidth: 170 },
];

const data = [
    { name: 'RED DEMO HZ 05-26-032', bottomUWI: '100/16-03-070-09W0/05', status: 'Active', surfaceUWI: 'S-151-S/151-D-15(NTS)', spudDate: 'Nov 19, 2017 03:00', hierarchy: 'Region / Alberta/W...', geography: 'Canada / Alberta', fluidType: 'Mud' },
];

const AllWellsTable: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleFilterClick = () => {
        console.log('Filter button clicked');
    };

    return (
        <>
        <GenericTable
            title="All Wells"
            columns={columns}
            data={data}
            onCreateClick={handleOpenModal}
            onFilterClick={handleFilterClick}
        />
            <CreateWellModal open={modalOpen} onClose={handleCloseModal} />
        </>
    );
};

export default AllWellsTable;
