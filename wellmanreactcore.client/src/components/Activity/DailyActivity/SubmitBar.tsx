import React from "react";
import styles from './DailyActivity.module.css';

const SubmitBar: React.FC = () => {
  return (
    <footer className={styles.submitBar}>
      <div className={styles.submitInfo}>
        <h3 className={styles.submitQuestion}>Do you want to submit this Daily Activity?</h3>
        <hr className={styles.divider} />
        <p className={styles.submitDate}>Date: June 14, 2024</p>
      </div>
      <button className={styles.submitButton}>
        <span>Submit Daily</span>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1853e56a7702b8536d212b0d113b5d494d65176635e1fc6630abb0e5e31e0ab8?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="" className={styles.submitIcon} />
      </button>
    </footer>
  );
}

export default SubmitBar;
