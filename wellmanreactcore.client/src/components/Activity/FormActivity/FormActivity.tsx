import React from 'react';
import NavBar from './FormActivityNavBar';
import Sidebar from './FormActivitySideBar';
import styles from './FormActivity.module.css';


interface NavBarProps {
  title: string;
  activity: string;
  well: string;
  isCompleted: boolean;
}

const FormActivity: React.FC = () => {
  const navBarProps: NavBarProps = {
    title: 'Daily Costs',
    activity: 'Drilling 3D',
    well: 'RES DEMO HZ 05-26-032-09W4',
    isCompleted: false,
  };

  return (
    <main className={styles.dailyCostsContainer}>
      <Sidebar />
      <NavBar {...navBarProps} />
      {/* <DrillingSummary />*/}
    </main>
  );
}

export default FormActivity;
