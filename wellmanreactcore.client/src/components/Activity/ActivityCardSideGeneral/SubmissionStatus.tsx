import React, { useState } from 'react';
import styles from './SubmissionStatus.module.css';


interface SubmissionStatusProps {

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


const SubmissionStatus: React.FC<SubmissionStatusProps> = ({activityData}) => {
    const [selectedTab, setSelectedTab] = useState('submissionStatus');

  return (
    <section className={styles.submissionStatus}>
          <header className={styles.statusHeader} >
              <div className={styles.tabs} style={{ borderBottom: '1px solid black' }}>
                  <p
                      className={`${styles.tabButton} ${selectedTab === 'activityDetails' ? styles.active : ''}`}
                      onClick={() => setSelectedTab('activityDetails')}
                  >
                      Activity Detail
                  </p>
                  <p
                      className={`${styles.tabButton} ${selectedTab === 'submissionStatus' ? styles.active : ''}`}
                      onClick={() => setSelectedTab('submissionStatus')}
                  >
                      Submission Status
                  </p>
                  <p
                      className={`${styles.tabButton} ${selectedTab === 'dates' ? styles.active : ''}`}
                      onClick={() => setSelectedTab(selectedTab)}
                  >
                      Dates
                  </p>
              </div>

          </header>
          <div className={styles.tabContent}>

              {selectedTab === 'activityDetails' &&
                  <div className={styles.statusContentSecond}>
                      <div className={styles.statusDetailsFirst}>
                          <div className={styles.detailItem}>
                              <strong>Operator:</strong> {activityData.operator }
                              <br></br>
                              <strong>Licence #:</strong> {activityData.license }
                              <br />
                              <strong>Surface:</strong> {activityData.surface }
                              <br />
                              <strong>Estimated TD:</strong> {activityData.estimatedTD }
                          </div>

                      </div>

                      <div className={styles.statusDetailsSecond}>
                          <div className={styles.detailItem}>
                              <strong>Current Depth:</strong> {activityData.currentDepth }
                              <br></br>
                              <strong>Rig name:</strong> {activityData.rigName }
                              <br />
                              <strong>AFE #:</strong> {activityData.afeNumber }
                              <br />
                              <strong>$/Meter:</strong> ${activityData.costPerMeter }
                          </div>

                      </div>

                      <div className={styles.statusDetailsThird}>

                          <div className={styles.detailItem}>
                              <strong>Field Managers</strong>
                              <br></br>
                              <strong>Demo Field Manager</strong> -None
                              <br />
                              <strong>{activityData.fieldManager }</strong> - None
      
                          </div>
                      </div>
                  </div>
              }
              {selectedTab === 'submissionStatus' && <div>
          <div className={styles.statusContent}>

            
              <div className={styles.statusDetailsDate}>
                  <div className={styles.detailItem}>
                      <strong>Last Approved Date:</strong> {activityData.lastApprovedDate }
                      <br />
                      <strong>Last Submit Date:</strong> {activityData.lastSubmitDate }
                  </div>

              </div>

            <div className={styles.statusDetails}>
                  <div className={styles.detailItem}>
                    <strong>Days to be Approved:</strong> {activityData.daysToBeApproved }
                    <br />
                    <strong>Days to be Released:</strong> {activityData.daysToBeReleased }
                  </div>

              </div>

              <div className={styles.statusDetails}>

                  <div className={styles.detailItem}>
                      <strong>Days Rejected:</strong> {activityData.daysRejected }
                      <br />
                              <strong>Days Refused:</strong> {activityData.daysRefused}
                  </div>
              </div>

          </div>
          <br></br>
          <div className={styles.statusDetailsDate}>
              <strong>Days to Submit: {activityData.daysToSubmit }</strong>
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
        {activityData.daysDetails.map((value, index) => (

            <tr key={index}>
                <td >{value.dayNumber}</td>
                <td>{value.date}</td>
                <td>{value.lastEdited}</td>
                <td>{value.reviewStatus}</td>
            </tr>

        )) }

        </tbody>
                  </table>
              </div>
}

          </div>
    </section>
  );
};

export default SubmissionStatus;
