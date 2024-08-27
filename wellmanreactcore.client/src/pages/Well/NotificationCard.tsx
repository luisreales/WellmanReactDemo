import React from 'react';
import styles from './WellDashboard.module.css';

interface NotificationCardProps {
    title: string;
    value: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ title, value }) => {
    return (
        <div className={styles.cardNotification}>
            <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>{title}</div>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardValue}>
                    <div className={styles.cardValueText}>
                        <div className={styles.highlightedText}>{value}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotificationCard;