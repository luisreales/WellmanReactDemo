import React from "react";
import styles from './BoxActivitySideGeneral.module.css';
import GeneralSection from "../ActivityCardSideGeneral/GeneralSection";

const BoxActivitySideGeneral: React.FC = () => {
  return (
    <main className={styles.container}>
        <GeneralSection />
    </main>
  );
}

export default BoxActivitySideGeneral;
