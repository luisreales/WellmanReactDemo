import React from "react";
import styles from './DailyActivity.module.css';
import MenuSection from './MenuSection';
import SubMenu from './SubMenu';

const costViewsOptions = [
    { label: "General", isActive: false, canOpenDrawer: false },
    { label: "Daily Cost", isActive: true, canOpenDrawer: true },
    { label: "Time Log", isActive: true, canOpenDrawer: true },
    { label: "Drill Strings", isActive: false, canOpenDrawer: false },
    { label: "Material Transfer", isActive: false, canOpenDrawer: false },
    { label: "Material Used & Received", isActive: false, canOpenDrawer: false },
    { label: "Mud Check", isActive: true, canOpenDrawer: true },
    { label: "Mud Solid Control", isActive: false, canOpenDrawer: false },
    { label: "Mud Volumes", isActive: false, canOpenDrawer: false },
    { label: "MWD Surveys", isActive: false, canOpenDrawer: false },
    { label: "Personnel", isActive: false, canOpenDrawer: false },
    { label: "Pumps", isActive: false, canOpenDrawer: false },
    { label: "Rentals", isActive: false, canOpenDrawer: false },
    { label: "Safety", isActive: false, canOpenDrawer: false },
    { label: "Shakers", isActive: false, canOpenDrawer: false },
    { label: "Water & fuel", isActive: false, canOpenDrawer: false }
];

const casingStringOptions = [
    { label: "General", isActive: false, canOpenDrawer: false },
    { label: "Casing String", isActive: false, canOpenDrawer: false }
];

const OptionsMenu: React.FC = () => {
  return (
    <nav className={styles.optionsMenu}>
      <MenuSection title="Cost Views" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2da6d5706bc2e6236ecda1634268eb7be189127f3b91e5cf5f6282dac09e67da?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40">
        <SubMenu options={costViewsOptions} />
      </MenuSection>
      <MenuSection title="Cost Views" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/76817199caa6f45ce5c244cb3a4eff0815a04a30513986007c81b8cc121bcfb1?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" />
      <MenuSection title="Casing String Run" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/be8737516bb82c4ac53503010b4c8f35c42fb184762da33475a2957b53fd6ba7?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40">
        <SubMenu options={casingStringOptions} />
      </MenuSection>
    </nav>
  );
}

export default OptionsMenu;
