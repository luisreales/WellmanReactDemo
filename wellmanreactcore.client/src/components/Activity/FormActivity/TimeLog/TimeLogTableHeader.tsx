import React from 'react';
import styles from './TimeLogComponent.module.css';

const TimeLogTableHeader: React.FC = () => {
    const headers = [
        'Time from*', 'Time to*', 'Timespan (Hrs)', 'Code*', 'Time Category',
        'From Depth', 'To Depth', 'Phase', 'Comments', 'Add to Chart', ''
    ];

    return (
        <div className={styles.tableHeader}>
            {headers.map((header, index) => (
                <div key={index} className={styles.headerCell}>
                    {header.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                            {word}
                            {i < header.split(' ').length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default TimeLogTableHeader;
