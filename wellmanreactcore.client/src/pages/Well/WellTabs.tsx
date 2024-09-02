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

interface Activity {
    activityId: string;
    activityName: string;
    status: string;
    jobType: string;
    afeNumber: string;
    startDate: string;
    endDate: string;
    lastReport: string;
    calendar: string;
}

interface ActivityListProps {
    activities: Activity[];
}



const WellTabs: React.FC<ActivityListProps> = ({ activities }) => {
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
                <ActivityTable columns={columns} data={activities}></ActivityTable>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                No AFEs Found
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                No Wellbores Found
            </CustomTabPanel>
        </Box>
    );
};

export default WellTabs;
