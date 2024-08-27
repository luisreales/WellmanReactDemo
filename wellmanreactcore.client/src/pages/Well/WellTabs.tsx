import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ActivitiesBadge from './ActivitiesBadge';
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
    { id: "activityId", label: "Id", minWidth: 170 },
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
        activityId: '1',
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
        activityId: '2',
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
        activityId: '3',
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
        activityId: '4',
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
        activityId: '5',
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
        activityId: '6',
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
        activityId: '7',
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
        activityId: '8',
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
        activityId: '9',
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
        activityId: '10',
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
                    variant="scrollable"
                    scrollButtons="auto" 
                    TabIndicatorProps={{
                        sx: { backgroundColor: '#0056b3', height: '3px' }
                    }}
                    sx={{
                        '& .MuiTab-root': {
                            minWidth: '150px',
                            textTransform: 'none',
                            fontWeight: 600,
                            fontSize: '14px',
                            color: 'text.primary',
                            '&.Mui-selected': {
                                color: '#0056b3',
                            },
                        },
                    }}
                >
                    <Tab label={<ActivitiesBadge text="Activities" number={10} />} {...a11yProps(0)} />
                    <Tab label={<ActivitiesBadge text="AFEs" number={0} />} {...a11yProps(1)} />
                    <Tab label={<ActivitiesBadge text="Wellbore" number={0} />} {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <ActivityTable columns={columns} data={data}></ActivityTable>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                No AFEs Found
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                No Wellbores Found
            </CustomTabPanel>
        </Box>
    );
}
