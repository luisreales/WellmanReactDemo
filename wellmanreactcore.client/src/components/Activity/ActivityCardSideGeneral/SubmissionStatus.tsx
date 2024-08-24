import React from 'react';
import styles from './SubmissionStatus.module.css';

const SubmissionStatus: React.FC = () => {
  return (
    <section className={styles.submissionStatus}>
      <header className={styles.statusHeader}>
        <h2 className={styles.statusTitle}>Submission Status</h2>
      </header>
      <div className={styles.statusContent}>
        <div className={styles.statusDates}>
          <p className={styles.dateInfo}>
            <strong>Last Approved Date:</strong> Dic 28, 2023
            <strong>Last Submit Date:</strong> Dic 21, 2023
          </p>
          <p className={styles.daysToSubmit}>Days to Submit: 3</p>
        </div>
        <div className={styles.statusDetails}>
          <div className={styles.detailItem}>
            <strong>Days to be Approved:</strong> 2
            <br />
            <strong>Days to be Released:</strong> 0
          </div>
          <div className={styles.detailItem}>
            <strong>Days Rejected:</strong> 0
            <br />
            <strong>Days Refused:</strong> 0
          </div>
        </div>
      </div>
      <table className={styles.statusTable}>
        <thead>
          <tr>
            <th>Day #</th>
            <th>Date</th>
            <th>Last Edited</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dic 15, 2023</td>
            <td>Dic 22, 2023</td>
            <td>Review</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Dic 16, 2023</td>
            <td>Dic 25, 2023</td>
            <td>Review</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Dic 17, 2023</td>
            <td>Dic 27, 2023</td>
            <td>Review</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default SubmissionStatus;
