import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import styles from './DailyActivity.module.css';
import Switch from '@mui/material/Switch';

const CustomSwitch = styled(Switch)(({ theme }) => ({
    padding: '2px',
    '& .MuiSwitch-switchBase': {
        padding: '3px',
    },
    '& .MuiSwitch-track': {
        background: 'none',
    },
    '& .Mui-checked': {
        color: theme.palette.primary.main,
        '& + .MuiSwitch-track': {
            background: 'none', 
            opacity: 1,
        },
    },
}));


const LockSwitch: React.FC = () => {

  const [checked, setChecked] = useState(false);

const handleChange = (event) => {
    setChecked(event.target.checked);
};

  return (
    <div className={styles.lockSwitch}>
      <label htmlFor="lockDay" className={styles.lockLabel}>
        Do you want to lock this Day?
      </label>
      <div className={styles.switchTrack}>
              <CustomSwitch checked={checked} onChange={handleChange} />
      </div>
    </div>
  );
}

export default LockSwitch;
