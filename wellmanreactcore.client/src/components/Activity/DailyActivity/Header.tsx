import React from "react";
import styles from './DailyActivity.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/caca6460e01d7692f0fee92972dca571891ac00333c11da33ee89e4d7f080553?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
          alt=""
          className={styles.icon}
        />
        <h1 className={styles.title}>Daily Activity</h1>
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9876a751e10e0e86e7e2161fde02ea7cdcc7c0c199b81efb6b86e0665762fda6?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
        alt="User profile"
        className={styles.profileIcon}
      />
    </header>
  );
}

export default Header;
