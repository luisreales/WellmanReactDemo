import React from 'react';
import styles from './ActivityCard.module.css';

interface ActivityCardProps {
  title: string;
  estimated?: string;
  actual?: string;
  value?: string;
  icon: string;
  isNegative?: boolean;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, estimated, actual, value, icon, isNegative }) => {
  return (
    <div className={`${styles.activityCard} ${isNegative ? styles.negative : ''}`}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <img src={icon} alt="" className={styles.cardIcon} />
      </div>
      {estimated && actual ? (
        <div className={styles.cardContent}>
          <div className={styles.estimatedValue}>
            <span className={styles.label}>Estimated</span>
            <span className={styles.value}>{estimated}</span>
          </div>
          <div className={styles.separator} />
          <div className={styles.actualValue}>
            <span className={styles.label}>Actual</span>
            <span className={styles.value}>{actual}</span>
          </div>
        </div>
      ) : (
        <div className={styles.cardContent}>
          <span className={styles.singleValue}>{value}</span>
        </div>
      )}
    </div>
  );
};

export default ActivityCard;
