import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ActivitiesBadge from './ActivitiesBadge'; // Asegúrate de ajustar la ruta según tu proyecto
import ActivityTable from '../../components/Activity/ActivityTable/ActivityTable';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const columns = [
    { id: "activityName", label: "Activity Name", minWidth: 170 },
    { id: "status", label: "Status", minWidth: 100 },
    { id: "jobType", label: "Job Type", minWidth: 170 },
    { id: "afeNumber", label: "AFE#", minWidth: 170 },
    { id: "startDate", label: "Start Date", minWidth: 100 },
    { id: "endDate", label: "End Date", minWidth: 100 },
    { id: "lastReport", label: "Last Report", minWidth: 100 },
    { id: "calendar", label: " ", minWidth: 100 },
];

const data = [
    {
        activityName: "Drilling (3D)",
        status: "Active",
        jobType: "N/A",
        afeNumber: "XDR170005",
        startDate: "Nov 30, 2023",
        endDate: "None",
        lastReport: "Dic 11, 2023",
        calendar: "calendar-icon"
    },
    {
        activityName: "Workover",
        status: "Active",
        jobType: "WorkOver Completion",
        afeNumber: "D75643",
        startDate: "Ago 25, 2023",
        endDate: "None",
        lastReport: "Nov 16, 2023",
        calendar: "calendar-icon"
    },
    {
        activityName: "Completion (2D)",
        status: "Active",
        jobType: "Initial Frac",
        afeNumber: "6789",
        startDate: "Jul 14, 2023",
        endDate: "None",
        lastReport: "Nov 22, 2023",
        calendar: "calendar-icon"
    },
    {
        activityName: "Construction-1",
        status: "Completed",
        jobType: "None",
        afeNumber: "M25252",
        startDate: "Ago 8, 2023",
        endDate: "None",
        lastReport: "Sept 4, 2023",
        calendar: "calendar-icon"
    },
    {
        activityName: "Initial Drilling",
        status: "Completed",
        jobType: "N/A",
        afeNumber: "C75643",
        startDate: "Jun 12, 2023",
        endDate: "None",
        lastReport: "Nov 17, 2023",
        calendar: "calendar-icon"
    },
    {
        activityName: "Drilling 2",
        status: "Completed",
        jobType: "None",
        afeNumber: "C98765",
        startDate: "Jun 18, 2023",
        endDate: "Jul 16, 2023",
        lastReport: "Nov 9, 2023",
        calendar: "calendar-icon"
    },
    {
        activityName: "Workover 1",
        status: "Completed",
        jobType: "None",
        afeNumber: "C98765",
        startDate: "Jun 18, 2023",
        endDate: "Jul 16, 2023",
        lastReport: "Nov 9, 2023",
        calendar: "calendar-icon"
    },
    {
        activityName: "Reclamation",
        status: "Completed",
        jobType: "None",
        afeNumber: "C98765",
        startDate: "Jun 18, 2023",
        endDate: "Jul 16, 2023",
        lastReport: "Nov 9, 2023",
        calendar: "calendar-icon"
    },
    {
        activityName: "Cleanup",
        status: "Completed",
        jobType: "None",
        afeNumber: "D75643",
        startDate: "Jun 09, 2023",
        endDate: "None",
        lastReport: "Nov 9, 2023",
        calendar: "calendar-icon"
    },
    {
        activityName: "Construction",
        status: "Completed",
        jobType: "None",
        afeNumber: "D75643",
        startDate: "Jun 05, 2023",
        endDate: "None",
        lastReport: "Nov 9, 2023",
        calendar: "calendar-icon"
    }
];


export default function WellTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    variant="scrollable"  // Permite desplazamiento si hay muchas tabs
                    scrollButtons="auto"  // Muestra los botones de desplazamiento
                    TabIndicatorProps={{
                        sx: { backgroundColor: '#0056b3', height: '3px' } // Color y grosor del indicador
                    }}
                    sx={{
                        '& .MuiTab-root': {
                            minWidth: '150px', // Ancho mínimo para cada tab
                            textTransform: 'none', // Mantener el texto como está
                            fontWeight: 600,
                            fontSize: '14px',
                            color: 'text.primary',
                            '&.Mui-selected': {
                                color: '#0056b3', // Color de la pestaña seleccionada
                            },
                        },
                    }}
                >
                    <Tab label={<ActivitiesBadge text="Activities" number={10} />} {...a11yProps(0)} />
                    <Tab label={<ActivitiesBadge text="AFEs" number={21} />} {...a11yProps(1)} />
                    <Tab label={<ActivitiesBadge text="Wellbore" number={24} />} {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <ActivityTable columns={columns} data={data}></ActivityTable>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}
