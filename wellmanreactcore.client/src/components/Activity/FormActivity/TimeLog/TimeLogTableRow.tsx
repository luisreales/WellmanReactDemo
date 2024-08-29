
import React from 'react';
import styles from './TimeLogComponent.module.css';

interface TimeLogTableRowProps {
    data: {
        timeFrom: string;
        timeTo: string;
        timespan: string;
        code: string;
        category: string;
        fromDepth: string;
        toDepth: string;
        phase: string;
        comments: string;
        [key: string]: string;
    };
}

const TimeLogTableRow: React.FC<TimeLogTableRowProps> = ({ data }) => {
    return (
        <div className={styles.tableRow}>
            {Object.values(data).map((value, index) => (
                <div key={index} className={styles.tableCell}>
                    {value}
                </div>
            ))}
            <div className={styles.tableCell}>
                <input type="checkbox" className={styles.addToChartCheckbox} />
            </div>
            <div className={styles.tableCell}>
                <button className={styles.actionButton}>
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cadc77767707b62ad8cd12ab18a60cebf3af51dc4e7b5c3143cfc66ac96aafb?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
                        alt="Action"
                        className={styles.actionIcon}
                    />
                </button>
            </div>
        </div>
    );
}

export default TimeLogTableRow;
