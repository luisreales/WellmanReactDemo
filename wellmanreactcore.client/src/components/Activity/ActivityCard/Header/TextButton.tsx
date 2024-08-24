import React from 'react';
import styles from './Header.module.css';

interface TextButtonProps {
  iconSrc: string;
  text: string;
  rightIconSrc?: string;
}

const TextButton: React.FC<TextButtonProps> = ({ iconSrc, text, rightIconSrc }) => {
  return (
    <button className={styles.textButton}>
      <img src={iconSrc} alt="" className={styles.textButtonIcon} />
      <span>{text}</span>
      {rightIconSrc && <img src={rightIconSrc} alt="" className={styles.buttonIcon} />}
    </button>
  );
};

export default TextButton;
