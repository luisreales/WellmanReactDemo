import React from 'react';
import styles from './FormActivity.module.css';

interface NavBarProps {
  title: string;
  activity: string;
  well: string;
  isCompleted: boolean;
}

const FormActivityNavBar: React.FC<NavBarProps> = ({ title, activity, well, isCompleted }) => {
  return (
    <header className={styles.navBar}>
      <div className={styles.navBarContent}>
        <div className={styles.navBarInfo}>
          <button className={styles.backButton} aria-label="Go back">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/259d6732131efb6169fec70de2d1bdd37fbb1d3222a0277edb25bd22aba80093?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
              alt=""
              className={styles.backIcon}
            />
          </button>
          <div className={styles.pageInfo}>
            <h1 className={styles.pageTitle}>{title}</h1>
            <div className={styles.activityInfo}>
              <div className={styles.activityLabel}>
                <span className={styles.labelText}>Activity:</span>
                <span className={styles.activityValue}>{activity}</span>
              </div>
              <div className={styles.wellInfo}>
                <span className={styles.wellLabel}>WELL:</span>
                <span className={styles.wellValue}>{well}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navBarActions}>
          <div className={styles.completedSwitch}>
            <span className={styles.completedLabel}>Completed</span>
            <div className={styles.switchContainer}>
              <div className={styles.switchTrack}>
                <div className={`${styles.switchThumb} ${isCompleted ? styles.switchThumbActive : ''}`} />
              </div>
            </div>
          </div>
          <button className={styles.saveButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d71c32b876de562e1636899248ca86a1b58febb6ccdf49372f9666e7afd38adf?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
              alt=""
              className={styles.saveIcon}
            />
            <span className={styles.saveText}>Save</span>
          </button>
          <button className={styles.moreActionsButton} aria-label="More actions">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/550b8de47ac8db9b91fbdc76be10f8cc7cc2ecd44990cae116b4300732266992?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
              alt=""
              className={styles.moreActionsIcon}
            />
          </button>
        </div>
      </div>
      <div className={styles.navBarHighlight} />
    </header>
  );
};

export default FormActivityNavBar;
