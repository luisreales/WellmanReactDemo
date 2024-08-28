import React, { useState } from 'react';
import {
    Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody,
    TablePagination, IconButton
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ActivityDetailsDrawer from '../../../pages/Well/ActivityDetailsDrawer';


interface GeneralSectionProps {
    estimated?: string;
    actual?: string;
    AFEestimated?: string;
    activityCost?: string;
    lastApprovedDate: string;
    lastSubmitDate: string;
    daysToBeApproved: number;
    daysToBeReleased: number;
    daysRejected: number;
    daysRefused: number;
    daysToSubmit: number;
    operator: string;
    license: string;
    surface: string;
    estimatedTD: string;
    currentDepth: string;
    rigName: string;
    afeNumber: string;
    costPerMeter: string;
    fieldManager: string;
    daysDetails: {
        dayNumber: number;
        date: string;
        lastEdited: string;
        reviewStatus: string;
    }[];
    wellboresData: {
        name: string;
        status: string;
        trajectory: string;
        parent: string;
    }[];
}

interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'right' | 'left' | 'center';
}

interface Data {
    [key: string]: string | number;
}

interface GenericTableProps {
    columns: Column[];
    data: Data[];
}

const GenericTable: React.FC<GenericTableProps> = ({ columns, data }) => {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedActivityId, setSelectedActivityId] = useState<string | number | null>(null);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleActivityNameClick = (activityId: string | number) => {
        setSelectedActivityId(activityId);
        setDrawerOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
        setSelectedActivityId(null);
    };


    const randomDataActivity: GeneralSectionProps = {
        estimated: "19.5",
        actual: "24.6",
        AFEestimated: "2,596,259.83",
        activityCost: "2,606,591.26",
        lastApprovedDate: "Dec 28, 2023",
        lastSubmitDate: "Dec 21, 2023",
        daysToBeApproved: 2,
        daysToBeReleased: 0,
        daysRejected: 0,
        daysRefused: 0,
        daysToSubmit: 3,
        operator: "ABH Collins",
        license: "0215448",
        surface: "05-26-032-09W4 - DLS",
        estimatedTD: "4,189.1 mKB",
        currentDepth: "4,987 m",
        rigName: "Trinidad - 449",
        afeNumber: "XDR170005",
        costPerMeter: "520.61",
        fieldManager: "Rosario Pacheco",
        daysDetails: [
            { dayNumber: 1, date: "Dec 15, 2023", lastEdited: "Dec 22, 2023", reviewStatus: "Review" },
            { dayNumber: 2, date: "Dec 16, 2023", lastEdited: "Dec 25, 2023", reviewStatus: "Review" },
            { dayNumber: 3, date: "Dec 17, 2023", lastEdited: "Dec 27, 2023", reviewStatus: "Review" },
        ],
        wellboresData: [
            {
                name: "North Star 1",
                status: "Active",
                trajectory: "Vertical",
                parent: "Main Well A",
            },
            {
                name: "Blue Horizon 3",
                status: "Suspended",
                trajectory: "Deviated",
                parent: "Main Well B",
            },
            {
                name: "Eagle Point 2",
                status: "Abandoned",
                trajectory: "Horizontal",
                parent: "Main Well C",
            },
            {
                name: "Eagle Point 4",
                status: "Active",
                trajectory: "Verticall",
                parent: "Main Well A",
            },
            {
                name: "North Star 34",
                status: "Unable",
                trajectory: "Vertical",
                parent: "Main Well T",
            },
        ],
    };

    return (
        <>
            <Paper sx={{ width: '100%', mb: 3, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                <TableContainer sx={{ border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden' }}>
                    <Table stickyHeader aria-label="generic table">
                        <TableHead sx={{ backgroundColor: '#f5f8fD!important' }}>
                            <TableRow sx={{ backgroundColor: '#f5f8fD!important' }}>
                                {columns
                                    .filter(column => column.id !== "activityId") // Filtrar la columna activityId
                                    .map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                            sx={{ backgroundColor: '#f5f8fD!important' }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                            </TableRow>
                        </TableHead>
                        
                        <TableBody>
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index} sx={{ backgroundColor: '#fff!important' }}>
                                    {columns
                                        .filter(column => column.id !== "activityId") // Filtrar la columna activityId
                                        .map((column) => (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.id === "activityName" ? (
                                                    <span
                                                        onClick={() => handleActivityNameClick(row['activityId'])}
                                                        style={{ cursor: 'pointer', color: 'blue' }}
                                                    >
                                                        {row[column.id]}
                                                    </span>
                                                ) : row[column.id] === "calendar-icon" ? (
                                                    <IconButton>
                                                        <CalendarTodayIcon />
                                                    </IconButton>
                                                ) : (
                                                    row[column.id]
                                                )}
                                            </TableCell>
                                        ))}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 20, 50]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <ActivityDetailsDrawer
                activityId={selectedActivityId}
                open={drawerOpen}
                onClose={handleCloseDrawer}
                activityData={randomDataActivity }
            />
        </>
    );
};

export default GenericTable;
