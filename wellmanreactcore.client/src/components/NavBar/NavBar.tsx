import React from "react";
import styles from './NavBar.module.css';
import Icon from './Icon';
import ProfileDropdown from './ProfileDropdown';
import NotificationBadge from './NotificationBadge';
import Settings from './../../assets/icons/icon1.svg';

interface IconType {
  src: string;
  alt: string;
}

const NavBar: React.FC = () => {
  const icons: IconType[] = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/84c73b9ac135a93901e4a6ba8bc27e0e68b2874966b1e71f316fcf13edfefe63?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40", alt: "Notification icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ff9847386211a7e155df4bd04b4fc2dbfc75a74ca87ab86d00c8c221c3498960?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40", alt: "Message icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/05a70adf54ca1700ba6d2dcba9003122dc07ce5a7771a4d90e2d0643aa176e51?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40", alt: "Settings icon" },
    { src: Settings, alt: "Settings icon" }
  ];

  return (
    <nav className={styles.navBar}>
      <div className={styles.logoWrapper}>
        <div className={styles.logoContainer}>
          <img 
            loading="lazy" 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/33796cdcd18c960d8689193048939bd990fd20c242ff917d2f9009320e3928a1?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" 
            className={styles.logo} 
            alt="Company logo" 
          />
        </div>
      </div>
      <div className={styles.navActions}>
        <div className={styles.iconGroup}>
          {icons.map((icon, index) => (
            <Icon key={index} src={icon.src} alt={icon.alt} />
          ))}
        </div>
        <ProfileDropdown 
          name="Charles Smith" 
          avatarSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d35846e5ba93204ae62245224a4253d639a9ef6feacc2f88ebc1025c9e105f1b?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" 
        />
        <NotificationBadge count={21} />
      </div>
    </nav>
  );
}

export default NavBar;
