import React from "react";
import styles from './BoxActivitySideGeneral.module.css';
import GeneralSection from "../ActivityCardSideGeneral/GeneralSection";



interface BoxActivitySideGeneralProps {
  
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


const BoxActivitySideGeneral: React.FC<BoxActivitySideGeneralProps> = ({ activityData }) => {


  return (
    <main className={styles.container}>
          <GeneralSection activityData={activityData } />
    </main>
  );
}

export default BoxActivitySideGeneral;
