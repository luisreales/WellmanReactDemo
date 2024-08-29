import React from 'react';
import styles from './DailyCosts.module.css';

interface CostData {
    accountCode: string;
    vendor: string;
    ticket: string;
    amount: string;
    comments: string;
}

interface DailyCostTableRowProps {
    data: CostData;
    isEven: boolean;
}

const DailyCostTableRow: React.FC<DailyCostTableRowProps> = ({ data, isEven }) => {
    return (
        <tr className={isEven ? styles.evenRow : styles.oddRow}>
            <td className={styles.tableCell}>
                <div className={styles.checkbox}>
                    <input type="checkbox" id={`row-${data.accountCode}`} className={styles.hiddenCheckbox} />
                    <label htmlFor={`row-${data.accountCode}`} className={styles.checkboxLabel}></label>
                </div>
            </td>
            <td className={styles.tableCell}>{data.accountCode}</td>
            <td className={styles.tableCell}>{data.vendor}</td>
            <td className={styles.tableCell}>{data.ticket}</td>
            <td className={styles.tableCell}>{data.amount}</td>
            <td className={styles.tableCell}>{data.comments}</td>
            <td className={styles.tableCell}></td>
        </tr>
    );
};

export default DailyCostTableRow;
