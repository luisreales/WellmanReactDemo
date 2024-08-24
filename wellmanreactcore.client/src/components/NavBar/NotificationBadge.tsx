import React from "react";
import styles from './NavBar.module.css';

interface NotificationBadgeProps {
  count: number;
}

const NotificationBadge: React.FC<NotificationBadgeProps> = ({ count }) => {
  return (
    <div className={styles.notificationBadge}>
      <div className={styles.badgeContent}>{count}</div>
    </div>
  );
}

export default NotificationBadge;
