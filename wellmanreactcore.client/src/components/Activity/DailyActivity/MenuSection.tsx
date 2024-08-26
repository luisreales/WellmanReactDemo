import React, { ReactNode } from "react";
import styles from './DailyActivity.module.css';

interface MenuSectionProps {
  title: string;
  iconSrc: string;
  children: ReactNode;
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, iconSrc, children }) => {
  return (
    <section className={styles.menuSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <img src={iconSrc} alt="" className={styles.sectionIcon} />
      </div>
      {children}
    </section>
  );
}

export default MenuSection;
