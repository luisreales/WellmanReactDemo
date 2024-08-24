import React from "react";
import styles from './NavSidebar.module.css';
import MenuItem from './SideBarMenuItem';
import Create from './../../assets/icons/icon-create.png'
import Dashboard from './../../assets/icons/icon-dashboard.png'
import Activities from './../../assets/icons/icon-activities-active.svg'
import Wells from './../../assets/icons/icon-well.png'
import AFEs from './../../assets/icons/icon-afe.png'
import Pads from './../../assets/icons/icon-pad.png'
import Facilities from './../../assets/icons/icon-facilities.png'
import Pipelines from './../../assets/icons/icon-pipeline.png'
import Reports from './../../assets/icons/icon-report.png'
import Admin from './../../assets/icons/icon-settings.png'

interface MenuItemType {
  label: string;
  icon: string;
  to: string;
}

const menuItems: MenuItemType[] = [
  { label: "Create", icon: Create, to: "/create" },
  { label: "Dashboard", icon: Dashboard, to: "/dashboard" },
  { label: "Activities", icon: Activities, to: "/activities" },
  { label: "Wells", icon: Wells, to: "/wells" },
  { label: "AFEs", icon: AFEs, to: "/afes" },
  { label: "Pads", icon: Pads, to: "/pads" },
  { label: "Facilities", icon: Facilities, to: "/facilities" },
  { label: "Pipelines", icon: Pipelines, to: "/pipelines" },
  { label: "Reports", icon: Reports, to: "/reports" },
  { label: "Admin", icon: Admin, to: "/admin" }
];

const NavSidebar: React.FC = () => {
  return (
    <nav className={styles.navSidebar}>
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6383e8f7b808c43189f6045f02f6942ab95c0ebecc86bd0b8f7e0a1813f3b49?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" 
        className={styles.logo} 
        alt="Company logo" 
      />
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <MenuItem 
            key={index} 
            label={item.label} 
            icon={item.icon} 
            isFirst={index === 0} 
            isLast={index === menuItems.length - 1} 
            to={item.to}
          />
        ))}
      </ul>
      <div className={styles.separator} />
    </nav>
  );
}

export default NavSidebar;
