import React, { useState } from 'react';
import { Button, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import WellIcon from './../../assets/WellIcon';
import ActivityIcon from './../../assets/ActivityIcon';
import styles from './CreateButtonWithMenu.module.css';

interface CreateButtonWithMenuProps {
    onCreateWellClick: () => void;
    onCreateActivityClick: () => void;
}

const CreateButtonWithMenu: React.FC<CreateButtonWithMenuProps> = ({
    onCreateWellClick,
    onCreateActivityClick,
}) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                variant="contained"
                startIcon={<AddIcon />}
                className={styles.textButton}
                endIcon={<ArrowDropDownIcon />}
                onClick={handleClick}
                sx={{
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    '&:hover': {
                        backgroundColor: '#f0f0f0',
                    }
                }}
            >
                Create
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem
                    onClick={() => {
                        handleClose();
                        onCreateWellClick();
                    }}>
                    <ListItemIcon>
                        <WellIcon />
                    </ListItemIcon>
                    <ListItemText primary="Well" />
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        handleClose();
                        onCreateActivityClick();
                    }}
                >
                    <ListItemIcon>
                        <ActivityIcon />
                    </ListItemIcon>
                    <ListItemText primary="Activity" />
                </MenuItem>
            </Menu>
        </>
    );
};

export default CreateButtonWithMenu;
