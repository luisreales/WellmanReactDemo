import React from 'react';
import styles from './MudCheckComponent.module.css';
import InputField from './InputField';
import DropdownField from './DropdownField';

const MudCheckEntryForm: React.FC = () => {
    return (
        <form className={styles.entryForm}>
            <div className={styles.formLine} />
            <div className={styles.formBackground}>
                <div className={styles.formWrapper}>
                    <InputField label="Time" type="time" required />
                    <DropdownField label="Mud" options={['Select']} required />
                    <DropdownField label="Mud Type" options={['Select']} required />
                    <InputField label="Mud Description" type="text" placeholder="Mud Description" />
                    <button className={styles.addButton}>
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1458b010f9b0ff99f4220ddba4a85cf5f83ec4076e9ab339d07326024b804b17?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="" className={styles.buttonIcon} />
                        <span className={styles.buttonText}>ADD</span>
                    </button>
                </div>
            </div>
        </form>
    );
}

export default MudCheckEntryForm;
