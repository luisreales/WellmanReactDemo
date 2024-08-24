import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    icon?: string;
    text: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, text, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {icon && <img src={icon} alt="" className={styles.buttonIcon} />}
            <span className={styles.buttonText}>{text}</span>
        </button>
    );
};

export default Button;