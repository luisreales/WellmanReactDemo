import React from "react";
import styles from './DailyActivity.module.css';
import Header from './Header';
import WorkDay from './WorkDay';
import LockSwitch from './LockSwitch';
import OptionsMenu from './OptionsMenu';
import SubmitBar from './SubmitBar';

interface DailyActivityProps {
    onClose: () => void;
}

const DailyActivity: React.FC<DailyActivityProps> = ({ onClose }) => {
  return (
    <main className={styles.sidebarDailyActivity}>
          <Header onClose={onClose} />
      <WorkDay />
      <LockSwitch />
      <OptionsMenu />
      <SubmitBar />
    </main>
  );
}

export default DailyActivity;
