import styles from './DailyCosts.module.css';

interface CostItem {
    label: string;
    value: string;
}

function DailyCostCostSummary() {
    const costItems: CostItem[] = [
        { label: 'Costs Today', value: '$ 5,000' },
        { label: 'All Costs Today', value: '$ 6,355' },
        { label: 'Cum Costs', value: '$ 5,000' },
        { label: 'Cum All Costs', value: '$ 6,355' },
        { label: 'AFE Amount', value: '$ 0' },
        { label: 'AFE Variance', value: '$ -6,355' },
    ];

    return (
        <section className={styles.costSummaryContainer}>
            {costItems.map((item, index) => (
                <div key={index} className={styles.costItem}>
                    <p className={styles.costLabel}>{item.label}</p>
                    <p className={styles.costValue}>{item.value}</p>
                </div>
            ))}
            <div className={styles.estimatedCostContainer}>
                <label htmlFor="estimatedCost" className={styles.estimatedCostLabel}>
                    Estimated<br />Final Cost
                </label>
                <input
                    id="estimatedCost"
                    type="text"
                    className={styles.estimatedCostInput}
                    placeholder="Enter a value"
                />
            </div>
        </section>
    );
}

export default DailyCostCostSummary;
