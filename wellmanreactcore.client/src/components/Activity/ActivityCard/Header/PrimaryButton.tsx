import React from 'react';
import styles from './Header.module.css';

interface PrimaryButtonProps {
  iconSrc: string;
  text: string;
  onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ iconSrc, text, onClick }) => {
  


  const handleButtonClick = () => {
    onClick();

};

  return (
    <button className={styles.primaryButton} onClick={handleButtonClick}>
      <div className={styles.primaryButtonContent}>
        <img src={iconSrc} alt="" className={styles.buttonIcon} />
        <span>{text}</span>
      </div>
    </button>
  );
};

export default PrimaryButton;
