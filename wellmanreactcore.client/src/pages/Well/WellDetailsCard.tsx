import React from 'react';
import styles from './WellDashboard.module.css';

interface WellDetailsProps {
    surfaceUwi: string;
    hierarchy: string;
    targetFormation: string;
    fluid: string;
    wellIdentifier: string;
    nameAlias: string;
}

const WellDetailsCard: React.FC<WellDetailsProps> = ({
    surfaceUwi,
    hierarchy,
    targetFormation,
    fluid,
    wellIdentifier,
    nameAlias
}) => {
    return (
        <div className={styles.wellDetailsCard}>
            <div className={styles.wellDetailsContent}>
                <table className={styles.wellDetailsTable}>
                    <thead>
                        <tr>
                            <th colSpan={2} className={styles.wellDetailsTitle}>Well Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.label}>Surface UWI: <br /> {surfaceUwi} </td>
                            <td className={styles.value}>Fluid: <br /> {fluid}</td>
                        </tr>
                        <tr>
                            <td className={styles.label}>Hierarchy: <br /> {hierarchy}</td>
                            <td className={styles.value}>Well Identifier (CWIS):<br /> {wellIdentifier}</td>
                        </tr>
                        <tr>
                            <td className={styles.label}>Target Formation:<br />{targetFormation}</td>
                            <td className={styles.value}>Name Alias:<br />{nameAlias}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default WellDetailsCard;
