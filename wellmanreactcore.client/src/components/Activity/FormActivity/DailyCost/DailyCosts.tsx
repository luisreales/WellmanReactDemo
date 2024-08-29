import React from 'react';
import styles from './DailyCosts.module.css';
import CostSummary from './DailyCostCostSummary';
import EntryForm from './DailyCostEntryForm';
import CostTable from './DailyCostCostTable';
import ActionButtons from './DailyCostActionButtons';

const DailyCosts: React.FC = () => {
    return (
        <main className={styles.dailyCostsContainer}>
            <CostSummary />
            <EntryForm />
            <section className={styles.costTableSection}>
                <header className={styles.tableHeader}>
                    <h2 className={styles.tableTitle}>
                        Added Cost <span className={styles.resultCount}>(7 results)</span>
                    </h2>
                    <ActionButtons />
                </header>
                <CostTable />
            </section>
        </main>
    );
};

export default DailyCosts;
