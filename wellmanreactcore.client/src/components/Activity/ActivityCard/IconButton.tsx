import React from 'react';
import styles from './ActivityCard.module.css';

interface IconButtonProps {
  icon: string;
  label: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, label }) => {
  return (
    <button className={styles.iconButton} aria-label={label}>
      <div className={styles.iconButtonInner}>
        <div className={styles.buttonContent}>
          <img loading="lazy" src={icon} className={styles.buttonIcon} alt="" />
        </div>
      </div>
    </button>
  );
};

export default IconButton;
