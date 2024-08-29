import React from 'react';
import styles from './MudCheckComponent.module.css';
import MudCheckTable from './MudCheckTable';
import MudCheckEntryForm from './MudCheckEntryForm';

const MudCheckComponent: React.FC = () => {
    return (
        <main className={styles.timeLogContainer}>
            <MudCheckEntryForm />
            <MudCheckTable />
        </main>
    );
}

export default MudCheckComponent;