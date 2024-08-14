import React, { useState } from 'react';
import {
    Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Checkbox,
    Typography, IconButton, Button, Box, Toolbar as MuiToolbar, TablePagination
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import CreateIcon from '@mui/icons-material/Create';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
    title: string;
    columns: Column[];
    data: Data[];
    onCreateClick?: () => void;
    onFilterClick?: () => void;
}

const GenericTable: React.FC<GenericTableProps> = ({ title, columns, data, onCreateClick, onFilterClick }) => {
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
        <Paper sx={{ width: '100%', mb: 2 }}>
            <MuiToolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Box>
                    <IconButton onClick={onFilterClick}>
                        <FilterListIcon />
                    </IconButton>
                    <Button
                        variant="contained"
                        startIcon={<CreateIcon />}
                        onClick={onCreateClick}
                        sx={{ ml: 2 }}
                    >
                        Create
                    </Button>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </MuiToolbar>
            <TableContainer>
                <Table stickyHeader aria-label="generic table">
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox color="primary" />
                            </TableCell>
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
                                <TableCell padding="checkbox">
                                    <Checkbox color="primary" />
                                </TableCell>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align}>
                                        {row[column.id]}
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
    );
};

export default GenericTable;
