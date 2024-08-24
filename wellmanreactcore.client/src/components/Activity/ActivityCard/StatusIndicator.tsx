import React from 'react';
import styles from './ActivityCard.module.css';

const StatusIndicator = ({ status }) => {
  return (
    <div className={styles.statusWrapper}>
      <div className={styles.statusCard}>
        <div className={styles.statusIconWrapper}>
          <div className={styles.statusIcon}>
            <div className={styles.activeIcon} />
          </div>
          <div className={styles.statusText}>{status}</div>
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e958eb9ae64aaa331b9d6961fa6b07a3c658f04a30164d42f3c78bc91f449784?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" className={styles.infoIcon} alt="Status information" />
    </div>
  );
};

export default StatusIndicator;