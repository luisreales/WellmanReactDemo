import React from "react";
import { Link } from "react-router-dom";
import styles from './NavSidebar.module.css';


interface SideBarMenuItemProps {
  label: string;
  icon?: string;
  isFirst: boolean;
  isLast: boolean;
  to: string;
}

const SideBarMenuItem: React.FC<SideBarMenuItemProps> = ({ label, icon, isFirst, isLast, to }) => {
  return (
    <li className={`${styles.menuItem} ${isLast ? styles.lastItem : ''}`}>
      <Link to={to} className={styles.sidebarItem}>
        {icon && (
          <div className={styles.iconWrapper}>
            <img loading="lazy" src={icon} className={styles.svgicon} alt="" />
          </div>
        )}
        <div className={styles.menuLabel}>{label}</div>
      </Link>
    </li>
  );
}

export default SideBarMenuItem;
