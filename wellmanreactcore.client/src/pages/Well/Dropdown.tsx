import React from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
    value: string;
    icon: string;
}

const Dropdown: React.FC<DropdownProps> = ({ value, icon }) => {
    return (
        <div className={styles.dropdownContainer}>
            <span className={styles.dropdownText}>{value}</span>
            <img src={icon} alt="" className={styles.dropdownIcon} />
        </div>
    );
};

export default Dropdown;