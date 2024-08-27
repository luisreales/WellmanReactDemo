import React, { useState } from 'react';
import {
    Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody,
    TablePagination, IconButton
} from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <>
            <Paper sx={{ width: '100%', mb: 3 }}>
                <TableContainer>
                    <Table stickyHeader aria-label="generic table">
                        <TableHead>
                            <TableRow>
                                
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    
                                    {columns.map((column) => (
                                        <TableCell key={column.id} align={column.align}>
                                            {row[column.id] === "calendar-icon" ? <IconButton>
                                                <CalendarTodayIcon />
                                            </IconButton> : row[column.id] }
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
        </>
    );
};

export default GenericTable;
