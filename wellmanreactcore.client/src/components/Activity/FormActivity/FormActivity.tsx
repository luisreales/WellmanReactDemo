import React from 'react';
import NavBar from './FormActivityNavBar';
import Sidebar from './FormActivitySideBar';
import styles from './FormActivity.module.css';
import TimeLogComponent from './TimeLog/TimeLogComponent';
import DailyCosts from './DailyCost/DailyCosts';
import MudCheckComponent from './MudCheck/MudCheck';

interface NavBarProps {
    title: string;
    activity: string;
    well: string;
    isCompleted: boolean;
}

interface FormActivityProps {
    activityType: string;
    toggleDrawer: (open: boolean) => void;
}

const FormActivity: React.FC<FormActivityProps> = ({ activityType, toggleDrawer }) => {
    let navBarProps: NavBarProps;

    if (activityType === "Daily Cost") {
        navBarProps = {
            title: 'Daily Costs',
            activity: 'Drilling 3D',
            well: 'RES DEMO HZ 05-26-032-09W4',
            isCompleted: false,
        };
    } else if (activityType === "Time Log") {
        navBarProps = {
            title: 'Time Log',
            activity: 'Logging Activity',
            well: 'WELL LOG 07-15-024-11W4',
            isCompleted: true,
        };
    } else if (activityType === "Mud Check") {
        navBarProps = {
            title: 'Mud Check',
            activity: 'Mud Analysis',
            well: 'MUD WELL 08-12-035-10W4',
            isCompleted: false,
        };
    } else {
        navBarProps = {
            title: 'General Activity',
            activity: 'Overview',
            well: 'GENERAL WELL 00-00-000-00W0',
            isCompleted: false,
        };
    }

    return (
        <main className={styles.dailyCostsContainer}>
            <div className={styles.sidebarAndContent}>
                <Sidebar />
                <div className={styles.mainContent}>
                    <NavBar {...navBarProps} toggleDrawer={toggleDrawer} />
                    <div className={styles.newComponentContainer}>
                        {(activityType === "Time Log") ? <TimeLogComponent /> : null}
                        {(activityType === "Daily Cost") ? <DailyCosts /> : null}
                        {(activityType === "Mud Check") ? <MudCheckComponent /> : null}
                    </div>
                </div>
            </div>

        </main>
    );
}

export default FormActivity;
