import React from 'react';
import Button from './Button';
import Dropdown from './Dropdown';
import styles from './WellFilter.module.css';

const WellFilter: React.FC = () => {
    return (
        <section className={styles.wellFilterContainer}>
            <div className={styles.filterGroup}>
                <Button icon="https://cdn.builder.io/api/v1/image/assets/TEMP/12f66712165425bc6bda70273d9411c70c669f1be9fb24d54a74b4d1250ace8b?placeholderIfAbsent=true&apiKey=bd7bf5db5dfb4e2e8a47f4d207cc39d6" text="Filters" />
                <p className={styles.wellCount}>Total wells: 221</p>
            </div>
            <div className={styles.actionGroup}>
                <Button text="Actions" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/efec7efc5e80838b488c23b617106f24ed9f049272a4568778306b2a13ccc7da?placeholderIfAbsent=true&apiKey=bd7bf5db5dfb4e2e8a47f4d207cc39d6" />
                <Button text="Columns" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5f51df8a5306bd2215bff3060e39d7623d3caea0f33b03eb3b547c46dcbc7f1f?placeholderIfAbsent=true&apiKey=bd7bf5db5dfb4e2e8a47f4d207cc39d6" />
                <span className={styles.showText}>Show</span>
                <Dropdown value="20" icon="https://cdn.builder.io/api/v1/image/assets/TEMP/3ffae1bfb15776460416c3383ac0ee6f59f4dae52109b6fb06e7bc8e48ef7259?placeholderIfAbsent=true&apiKey=bd7bf5db5dfb4e2e8a47f4d207cc39d6" />
            </div>
        </section>
    );
};

export default WellFilter;