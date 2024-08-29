import React from 'react';
import styles from './DailyCosts.module.css';

function ActionButtons() {
  return (
    <div className={styles.actionButtons}>
      <button className={styles.actionButton}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f8062139afc891d044091cf942fbdab9c90ac7550a616e4e13e66106d13fa3e?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="" className={styles.buttonIcon} />
        Sort
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/592e76331d2e87c0e7295ca827b3951638bc1c2e774b709ecf3b48247467d9d4?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="" className={styles.dropdownIcon} />
      </button>
      <button className={styles.actionButton}>Clear Form</button>
      <button className={styles.actionButton}>
        Actions
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/16d31ee902bdd29b2333c363cbef8cd7504ac8e2e60be85394ace4cb56a4281c?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="" className={styles.dropdownIcon} />
      </button>
    </div>
  );
}

export default ActionButtons;