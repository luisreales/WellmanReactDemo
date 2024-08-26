import React from "react";
import styles from './DailyActivity.module.css';

const LockSwitch: React.FC = () => {
  return (
    <div className={styles.lockSwitch}>
      <label htmlFor="lockDay" className={styles.lockLabel}>
        Do you want to lock this Day?
      </label>
      <div className={styles.switchTrack}>
        <input type="checkbox" id="lockDay" className={styles.switchInput} />
        <span className={styles.switchKnob}></span>
      </div>
    </div>
  );
}

export default LockSwitch;
