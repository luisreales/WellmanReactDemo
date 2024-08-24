import React from 'react';
import styles from './Header.module.css';
import IconButton from './IconButton';
import TextButton from './TextButton';
import PrimaryButton from './PrimaryButton';

// Header component definition using React.FC
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.divider} />
      <div className={styles.lockStatus}>
        <div className={styles.lockContainer}>
          <div className={styles.lockText}>Locked</div>
          <div className={styles.lockIndicator}>
            <div className={styles.lockDot} />
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      <nav className={styles.buttonContainer}>
        <IconButton
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f6029d1c5dab1134006619da5438a8cd8dd6beca0910f7d6d811e7381b573773?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
          alt="Schematics"
        />
        <IconButton
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/b588d60689ddc5144466d9b667c66d8e7fe9e20fe55ad753b1a6ffb75153851a?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
          alt="Location"
        />
        <TextButton
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0a1975e408e7098d6bd33be25ea9eb00499908c31c60e6eb7195c17ab434131d?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
          text="Reports"
          rightIconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/3ffae1bfb15776460416c3383ac0ee6f59f4dae52109b6fb06e7bc8e48ef7259?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
        />
        <PrimaryButton
          iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f604f15077caa48a121b6400d3e93ab20bb95b4d25501e59c2adbe153e31dffb?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
          text="Daily Activity"
        />
        <button className={styles.moreButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f097dad4ce49fa9a18503274966032cec7cda46dfdcc9a44684276ab60ba8cb?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
            alt="More options"
            className={styles.moreButtonIcon}
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
