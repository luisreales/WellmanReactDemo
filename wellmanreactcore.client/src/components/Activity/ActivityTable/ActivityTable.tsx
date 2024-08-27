import React, { useState } from 'react';
import {
    Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody,
    TablePagination, IconButton
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ActivityDetailsDrawer from '../../../pages/Well/ActivityDetailsDrawer';

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
            />
        </>
    );
};

export default GenericTable;
