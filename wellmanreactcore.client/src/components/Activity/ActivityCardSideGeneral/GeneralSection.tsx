import React from 'react';
import styles from './GeneralSection.module.css';
import SidebarMenu from './SidebarMenu';
import ActivityCard from './ActivityCard';
import SubmissionStatus from './SubmissionStatus';
import WellboresTable from './WellboresTable';

const GeneralSection: React.FC = () => {
  return (
    <main className={styles.generalSection}>
      <div className={styles.contentWrapper}>
        <aside className={styles.sidebar}>
          <SidebarMenu />
        </aside>
        <section className={styles.mainContent}>
          <header className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>General</h1>
          </header>
          <div className={styles.activityCards}>
            <ActivityCard
              title="Days"
              estimated="19.5"
              actual="24.6"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6954d361c0b667094745f34bb34a4e579b6e5133d95efa91ffc861671d1608f9?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
            />
            <ActivityCard
              title="AFE Estimated"
              value="$2,596,259.83"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/58764d967b82f26f3ceec7f4bce3f6e05f34c305e6d427ab1eab975e49608f49?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
            />
            <ActivityCard
              title="Activity Cost"
              value="$2,606,591.26"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b1875ebf3d0571e9c84bbfd5d0bad1c6b112c6913939745095877215094aae8c?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40"
              isNegative
            />
            <button className={styles.schematicsButton} aria-label="Open Schematics">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/697f6030dc7c44b07d11ca822a5ae26932de88d681db21e455197732fae56efe?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="" className={styles.schematicsIcon} />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b7448f634293c4dab01dabf82e3f162a614d6d4fc8bc1f20758d6e73e685a925?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="" className={styles.arrowIcon} />
            </button>
          </div>
          <SubmissionStatus />
          <WellboresTable />
        </section>
      </div>
    </main>
  );
};

export default GeneralSection;
