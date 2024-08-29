import React, { useState } from 'react';
import styles from './MudCheckTable.module.css';
import MudForm from './MudForm';
// import MudForm from './MudForm'; // Uncomment this line if you have the MudForm component

// Define the interface for a Mud Record
interface MudRecord {
    time: string;
    mud: string;
    mudType: string;
    mudDescription: string;
}

// Sample data for the Mud Checks
const MudChecksData: MudRecord[] = [
    {
        time: "12:00",
        mud: "Oil",
        mudType: "Invert Oil",
        mudDescription: "Invert",
    },
    {
        time: "11:00",
        mud: "Oil",
        mudType: "Oil",
        mudDescription: "Invert",
    },
    {
        time: "10:30",
        mud: "Water",
        mudType: "Oil",
        mudDescription: "Invert",
    },
    {
        time: "10:00",
        mud: "Water",
        mudType: "Lime-SX",
        mudDescription: "Lime",
    },
    {
        time: "09:00",
        mud: "Water",
        mudType: "Lime-SX",
        mudDescription: "Lime",
    },
    {
        time: "08:00",
        mud: "Water",
        mudType: "Lime-sx",
        mudDescription: "Lime",
    },
    {
        time: "07:00",
        mud: "Water",
        mudType: "Lime-SX",
        mudDescription: "Lime",
    }
];

const MudChecksTable: React.FC = () => {
    // State to track which row is expanded
    const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(null);

    // Function to toggle the accordion row
    const toggleAccordion = (index: number) => {
        setExpandedRowIndex(expandedRowIndex === index ? null : index);
    };

    return (
        <section className={styles.mudChecksSection}>
            <h2 className={styles.mudChecksTitle}>Mud Checks</h2>
            <table className={styles.mudChecksTable}>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Mud</th>
                        <th>Mud Type</th>
                        <th>Mud Description</th>
                        <th aria-label="Actions"></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {MudChecksData.map((mudCheck, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <td>{mudCheck.time}</td>
                                <td>
                                    <span className={`${styles.statusBadge} ${styles[mudCheck.mud.toLowerCase()]}`}>
                                        {mudCheck.mud}
                                    </span>
                                </td>
                                <td>{mudCheck.mudType}</td>
                                <td>{mudCheck.mudDescription}</td>
                                <td>
                                    <button
                                        className={styles.actionButton}
                                        aria-label="Toggle accordion"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <img
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c692f91991911b38ef63fb031b12db9227d5a9cbced645d8895706c29836c0ac?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
                                            alt="Toggle"
                                        />
                                    </button>
                                </td>
                                <td></td>
                            </tr>
                            {expandedRowIndex === index && (
                                <tr className={styles.accordionRow}>
                                    <td colSpan={6}>
                                        <div>
                                            <MudForm /> 
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

export default MudChecksTable;
