import React from 'react';
import styles from './MudCheckComponent.module.css';


interface InputFieldProps {
    label: string;
    type: string;             
    required?: boolean;       
    placeholder?: string;     
}

const InputField: React.FC<InputFieldProps> = ({ label, type, required, placeholder }) => {
    const id = `${label.toLowerCase().replace(/\s/g, '-')}-input`;

    return (
        <div className={styles.inputField}>
            <label htmlFor={id} className={styles.inputLabel}>
                {label}
                {required && <span className={styles.requiredAsterisk}>*</span>}
            </label>
            <input
                id={id}
                type={type}
                required={required}
                placeholder={placeholder}
                className={styles.inputElement}
            />
        </div>
    );
}

export default InputField;
