import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

interface AppBarComponentProps extends MuiAppBarProps {
    open: boolean;
    toggleDrawer: () => void;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarComponentProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#ffffff',
    color: '#000000',
    boxShadow: 'none',
    borderBottom: '1px solid #e0e0e0',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const AppBarComponent: React.FC<AppBarComponentProps> = ({ open, toggleDrawer }) => {
    return (
        <AppBar position="absolute" open={open}>
            <Toolbar sx={{ pr: '24px' }}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={toggleDrawer}
                    sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                <IconButton color="inherit">
                    <SearchIcon />
                </IconButton>
                <IconButton color="inherit">
                    <HelpIcon />
                </IconButton>
                <Switch color="default" />
                <IconButton color="inherit">
                    <Badge badgeContent={21} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
