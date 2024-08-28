import React, { useState } from 'react';
import styles from './DailyActivity.module.css';
import { Drawer, Button, Box } from '@mui/material';
import FormActivity from '../FormActivity/FormActivity';

interface SubMenuProps {
    options: string[];
}

const SubMenu: React.FC<SubMenuProps> = ({ options }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        setDrawerOpen(open);
    };

    return (
        <div>
            <ul className={styles.subMenu}>
                {options.map((option, index) => (
                    <li key={index} className={styles.subMenuItem}>
                        <button
                            className={styles.subMenuButton}
                            onClick={toggleDrawer(true)}
                        >
                            <span
                                className={styles.dot}
                                style={{ backgroundColor: index < 4 ? '#19CB60' : 'black' }}
                            ></span>
                            <span className={styles.optionLabel}>{option}</span>
                        </button>
                    </li>
                ))}
            </ul>

            {/* Drawer component */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: '800px', 
                        padding: '20px',
                        height: '800px'
                    },
                }}
            >
                <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                    <FormActivity>
                    </FormActivity>
                </Box>
            </Drawer>
        </div>
    );
};

export default SubMenu;
