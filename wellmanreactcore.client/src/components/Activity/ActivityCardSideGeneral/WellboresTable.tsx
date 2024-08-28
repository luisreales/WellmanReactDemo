import React, { useState } from 'react';
import styles from './WellboresTable.module.css';

interface Wellbore {
    name: string;
    status: string;
    trajectory: string;
    parent: string;
}

interface WellBoresProps {

    activityData: GeneralSectionProps;
}


interface GeneralSectionProps {
    estimated?: string;
    actual?: string;
    AFEestimated?: string;
    activityCost?: string;
    lastApprovedDate: string;
    lastSubmitDate: string;
    daysToBeApproved: number;
    daysToBeReleased: number;
    daysRejected: number;
    daysRefused: number;
    daysToSubmit: number;
    operator: string;
    license: string;
    surface: string;
    estimatedTD: string;
    currentDepth: string;
    rigName: string;
    afeNumber: string;
    costPerMeter: string;
    fieldManager: string;
    daysDetails: {
        dayNumber: number;
        date: string;
        lastEdited: string;
        reviewStatus: string;
    }[];
    wellboresData: {
        name: string;
        status: string;
        trajectory: string;
        parent: string;
    }[];
}





const wellboresData: Wellbore[] = [
    { name: 'Original Wellbore', status: 'Active', trajectory: 'Horizontal', parent: 'None' },
    { name: 'Leg#1', status: 'Producing', trajectory: 'Horizontal', parent: 'None' },
    { name: 'Leg#2', status: 'Producing', trajectory: 'Horizontal', parent: 'None' },
    { name: 'Leg#3', status: 'Active', trajectory: 'Horizontal', parent: 'None' },
    { name: 'Leg#4', status: 'Active', trajectory: 'Horizontal', parent: 'None' },
];

const WellboresTable: React.FC<WellBoresProps> = ({ activityData }) => {
    const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setExpandedRowIndex(expandedRowIndex === index ? null : index);
    };

    return (
        <section className={styles.wellboresSection}>
            <h2 className={styles.wellboresTitle}>Wellbores</h2>
            <table className={styles.wellboresTable}>
                <thead>
                    <tr>
                        <th>Name Wellbore</th>
                        <th>Status</th>
                        <th>Trajectory</th>
                        <th>Parent Wellbore</th>
                        <th aria-label="Actions"></th>
                    </tr>
                </thead>
                <tbody>
                    {activityData.wellboresData.map((wellbore, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td>{wellbore.name}</td>
                                <td>
                                    <span className={`${styles.statusBadge} ${styles[wellbore.status.toLowerCase()]}`}>
                                        {wellbore.status}
                                    </span>
                                </td>
                                <td>{wellbore.trajectory}</td>
                                <td>{wellbore.parent}</td>
                                <td>
                                    <button
                                        className={styles.actionButton}
                                        aria-label="Toggle accordion"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c692f91991911b38ef63fb031b12db9227d5a9cbced645d8895706c29836c0ac?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="Toggle" />
                                    </button>
                                </td>
                            </tr>
                            {expandedRowIndex === index && (
                                <tr className={styles.accordionRow}>
                                    <td colSpan={5}>
                                        <div className={styles.accordionContent}>
                                            <h3 className={styles.estimatedTitle}>Estimated</h3>
                                            <table className={styles.wellboresTable}>
                                                <thead>
                                                    <tr>
                                                        <th>KOP (MD)(mKB)</th>
                                                        <th>KOP (TVD)(mKB)</th>
                                                        <th>Total (MD) (mKB)</th>
                                                        <th>Total (TVS) (mKB)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>107.1</td>
                                                        <td>107.1</td>
                                                        <td>4.189.1</td>
                                                        <td>1.324.1</td>
                                                     </tr>
                                                </tbody>
                                            </table>

                                            <h3 className={styles.estimatedTitle}>Actual</h3>
                                            <table className={styles.wellboresTable}>
                                                <thead>
                                                    <tr>
                                                        <th>Final Date</th>
                                                        <th>KOP (TVD)(mKB)</th>
                                                        <th>Total (MD)(mKB)</th>
                                                        <th>Total (TVS)(mKB)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Dic 16, 2023</td>
                                                        <td>112.1</td>
                                                        <td>4.189.1</td>
                                                        <td>1.434.1</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </td>
                                </tr>
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default WellboresTable;
