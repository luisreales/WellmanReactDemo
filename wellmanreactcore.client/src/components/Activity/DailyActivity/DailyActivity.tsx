import React from "react";
import styles from './DailyActivity.module.css';
import Header from './Header';
import WorkDay from './WorkDay';
import LockSwitch from './LockSwitch';
import OptionsMenu from './OptionsMenu';
import SubmitBar from './SubmitBar';

const DailyActivity: React.FC = () => {
  return (
    <main className={styles.sidebarDailyActivity}>
      <Header />
      <WorkDay />
      <LockSwitch />
      <OptionsMenu />
      <SubmitBar />
    </main>
  );
}

export default DailyActivity;
