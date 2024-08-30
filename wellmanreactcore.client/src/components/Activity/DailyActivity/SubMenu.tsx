import React, { useState, useEffect } from 'react';
import styles from './DailyActivity.module.css';
import { Drawer, Box } from '@mui/material';
import FormActivity from '../FormActivity/FormActivity';

interface SubMenuProps {
    options: { label: string; isActive: boolean; canOpenDrawer: boolean }[];
}

const SubMenu: React.FC<SubMenuProps> = ({ options }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

    const toggleDrawer = (open: boolean, activity?: string) => (event: React.KeyboardEvent | React.MouseEvent) => {
        console.log(`Drawer open: ${open}, Activity: ${activity}`);
        setDrawerOpen(open);
        if (activity) {
            setSelectedActivity(activity);
        }
    };

    useEffect(() => {
        console.log('Drawer open:', drawerOpen);
        console.log('Selected activity:', selectedActivity);
    }, [drawerOpen, selectedActivity]);

    return (
        <div>
            <ul className={styles.subMenu}>
                {options.map((option, index) => (
                    <li key={index} className={styles.subMenuItem}>
                        <button
                            className={styles.subMenuButton}
                            onClick={option.canOpenDrawer ? toggleDrawer(true, option.label) : undefined}
                            style={{ cursor: option.canOpenDrawer ? 'pointer' : 'default' }}
                            disabled={!option.canOpenDrawer}
                        >
                            <span
                                className={styles.dot}
                                style={{ backgroundColor: option.isActive ? '#19CB60' : 'black' }}
                            ></span>
                            <span className={styles.optionLabel}>{option.label}</span>
                        </button>
                    </li>
                ))}
            </ul>

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '80%',
                        maxWidth: '1100px',
                        padding: '20px',
                        height: '90%'
                    },
                }}
            >
                <Box role="presentation">
                    {selectedActivity && <FormActivity activityType={selectedActivity} toggleDrawer={toggleDrawer} />}
                </Box>
            </Drawer>
        </div>
    );
};

export default SubMenu;
