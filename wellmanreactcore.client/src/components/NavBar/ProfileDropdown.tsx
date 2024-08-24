import React from "react";
import styles from './NavBar.module.css';

interface ProfileDropdownProps {
  name: string;
  avatarSrc: string;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ name, avatarSrc }) => {
  return (
    <div className={styles.profileDropdown}>
      <div className={styles.profileInfo}>
        <div className={styles.profileName}>{name}</div>
      </div>
      <img 
        loading="lazy" 
        src={avatarSrc} 
        className={styles.profileAvatar} 
        alt={`${name}'s avatar`} 
      />
    </div>
  );
}

export default ProfileDropdown;
