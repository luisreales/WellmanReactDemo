import React from 'react';
import styles from './WellboresTable.module.css';

interface Wellbore {
  name: string;
  status: string;
  trajectory: string;
  parent: string;
}

const wellboresData: Wellbore[] = [
  { name: 'Original Wellbore', status: 'Active', trajectory: 'Horizontal', parent: 'None' },
  { name: 'Leg#1', status: 'Producing', trajectory: 'Horizontal', parent: 'None' },
  { name: 'Leg#2', status: 'Producing', trajectory: 'Horizontal', parent: 'None' },
  { name: 'Leg#3', status: 'Active', trajectory: 'Horizontal', parent: 'None' },
  { name: 'Leg#4', status: 'Active', trajectory: 'Horizontal', parent: 'None' },
];

const WellboresTable: React.FC = () => {
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
          {wellboresData.map((wellbore, index) => (
            <tr key={index}>
              <td>{wellbore.name}</td>
              <td>
                <span className={`${styles.statusBadge} ${styles[wellbore.status.toLowerCase()]}`}>
                  {wellbore.status}
                </span>
              </td>
              <td>{wellbore.trajectory}</td>
              <td>{wellbore.parent}</td>
              <td>
                <button className={styles.actionButton} aria-label="View details">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c692f91991911b38ef63fb031b12db9227d5a9cbced645d8895706c29836c0ac?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default WellboresTable;
