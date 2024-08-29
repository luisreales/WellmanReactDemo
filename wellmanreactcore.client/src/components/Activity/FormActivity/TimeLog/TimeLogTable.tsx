import React from 'react';
import styles from './TimeLogComponent.module.css';
import TimeLogTableHeader from './TimeLogTableHeader';
import TimeLogTableRow from './TimeLogTableRow';

interface TableRowData {
    timeFrom: string;
    timeTo: string;
    timespan: string;
    code: string;
    category: string;
    fromDepth: string;
    toDepth: string;
    phase: string;
    comments: string;
}

const TimeLogTable: React.FC = () => {

    const tableData: TableRowData[] = [
        {
            timeFrom: '0:00',
            timeTo: '06:45',
            timespan: '6.75',
            code: '12-Run Casing & Casing',
            category: 'Normal',
            fromDepth: '100',
            toDepth: '200',
            phase: 'Drilling',
            comments: 'The equipment was mobilized and assembled 100% to commence drilling. Pressures were recorded, and the well.',
        }
    ];

    return (
        <div className={styles.timeLogTable}>
            <TimeLogTableHeader />
            <div className={styles.tableBody}>
                {tableData.map((row, index) => (
                    <TimeLogTableRow key={index} data={row} />
                ))}
            </div>
        </div>
    );
}

export default TimeLogTable;
