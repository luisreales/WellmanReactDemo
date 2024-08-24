import React from 'react';
import styles from './ActivityCard.module.css';
import StatusIndicator from './StatusIndicator';
import Header from './Header/Header';


interface ActivityCardProps {
    onClose: () => void;
}

const ActivityCardHeader: React.FC<ActivityCardProps> = ({ onClose }) => {
  return (
    <section className={styles.card}>
      <div className={styles.activityInfo}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb58d9319af49f066a71f072736d53efcb5bd438bfb0ee53805d64071b951bbe?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
          className={`${styles.activityIcon} ${styles.clickable}`}
          alt=""
          onClick={onClose}
        />
        <div className={styles.activityDetails}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ac5fe144d731ff1266e9996bd171821ff603080a0fc6f72613bc65dc5102129?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
            className={styles.wellIcon}
            alt=""
          />
          <div className={styles.textContainer}>
            <h2 className={styles.activityTitle}>Activity: Drilling (3D)</h2>
            <div className={styles.wellInfo}>
              <div className={styles.wellLabel}>
                <span className={styles.wellText}>WELL:</span>
                <div className={styles.wellName}>
                  <div className={styles.wellNameText}>RES DEMO HZ 05-26-032</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.statusContainer}>
        <div className={styles.divider} />
        <div className={styles.statusLabel}>Status</div>
        <StatusIndicator status="Active" />
        <div>
          <Header />
        </div>
      </div>
    </section>
  );
};

export default ActivityCardHeader;
