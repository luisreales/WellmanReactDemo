import React, { JSX, useState } from 'react';
import {
    Paper, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Checkbox,
    Box, Toolbar as MuiToolbar, TablePagination,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CreateButtonWithMenu from './form/CreateButtonWithMenu';
import MainTitle from './system/MainTitle';
import SearchComponent from './system/SearchComponent';
import WellDetailsDrawer from './../pages/Well/WellDetailsDrawer'; 
import IconButton from './Activity/ActivityCard/Header/IconButton';
import WellIcon from '../assets/WellIcon';
import WellFilter from '../pages/Well/WellFilter';

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
    icon: JSX.Element;
    onCreateClick?: () => void;
    onCreateActivityClick?: () => void;
    onFilterClick?: () => void;
}

const GenericTable: React.FC<GenericTableProps> = ({ title, columns, data, icon, onCreateClick, onCreateActivityClick, onFilterClick }) => {
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedWellId, setSelectedWellId] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleWellNameClick = (wellId: string) => {
        setSelectedWellId(wellId);
        //setDrawerOpen(true);
        navigate(`/WellDetail/${wellId}`);
    };

    const handleCloseDrawer = () => {
        setDrawerOpen(false);
        setSelectedWellId(null);
    };

    return (
        <>
            <div>
                <MuiToolbar sx={{ justifyContent: 'space-between', alignItems: 'center', padding: '0 16px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <WellIcon sx={{ marginRight: '8px' }} />
                        <MainTitle text={title} />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CreateButtonWithMenu
                            onCreateWellClick={onCreateClick}
                            onCreateActivityClick={onCreateActivityClick}
                        />
                        <IconButton
                            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b588d60689ddc5144466d9b667c66d8e7fe9e20fe55ad753b1a6ffb75153851a?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
                            alt="Location"
                        />
                    </Box>
                </MuiToolbar>
                <WellFilter />
                {/* <SearchComponent /> */}
                <TableContainer component={Paper} sx={{
                    marginTop: '15px',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                    <Table stickyHeader aria-label="generic table">
                        <TableHead sx={{ backgroundColor: '#f5f8fD!important' }}>
                            <TableRow sx={{ backgroundColor: '#f5f8fD!important' }}>
                                <TableCell padding="checkbox" sx={{ backgroundColor: '#f5f8fD!important' }}>
                                    <Checkbox color="primary" />
                                </TableCell>
                                {columns.filter(column => column.id !== "wellId").map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }} sx={{ backgroundColor: '#f5f8fD!important' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index} sx={{ backgroundColor: '#fff!important' }}>
                                    <TableCell padding="checkbox">
                                        <Checkbox color="primary" />
                                    </TableCell>
                                    {columns.filter(column => column.id !== "wellId").map((column) => (
                                        <TableCell key={column.id} align={column.align}>
                                            {column.id === 'wellName' ? (
                                                <span onClick={() => handleWellNameClick(row['wellId'] as string)} style={{ cursor: 'pointer', color: 'blue' }}>
                                                    {row[column.id]}
                                                </span>
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
            </div>
            
        </>
    );
};

export default GenericTable;
