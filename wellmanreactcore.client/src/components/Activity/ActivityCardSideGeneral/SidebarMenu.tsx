import React from 'react';
import styles from './SidebarMenu.module.css';

interface MenuItemType {
  label: string;
  icon: string;
  active?: boolean;
  hasSubmenu?: boolean;
}

const menuItems: MenuItemType[] = [
  { label: 'General', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/12af713d80e78d7d27413ac42eeaeb05057f477c5574b0bff5eb8b95fc2e2183?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40', active: true },
  { label: 'Activity Calendar', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/acc1bf994739d3706d0b2cedb5c88e4a35ee184c6fd4042da9d7e101e16541dd?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40' },
  { label: 'Active Equipment', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8a9b535d201a6a2118dec5f3e15faa2b93ecfa939900af8e52912cf6a77d7d7a?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40' },
  { label: 'Operation Summary', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/270885162642130fea03948760f4168cc8ebaadc8d77345531c777fb7af0c819?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40' },
  { label: 'Other Well Activities', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2eb22a395e79b8779428de9927459dc5f6ba90b871c1323f9ff14ece1e141ab3?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40', hasSubmenu: true },
  { label: 'Common/Essentials', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7ab2ac0ed5181aec8229f663619d974c8a438ca2be67d66d7545499ba3c3d435?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40', hasSubmenu: true },
  { label: 'Planning', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a7d52e4158efc332353b3626aa30ab8c636b1951cedb137694b89cb008361f56?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40', hasSubmenu: true },
  { label: 'AFEs', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e8bd15790b666a3dccb5e4ea9a56ec6d9e0485d6b45c20aab5dbf268029b203e?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40' },
  { label: 'Attachments', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7f363c3a4dd6abc845fc9c014093d43be0783248b49083238f1dde19a434d145?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40' },
  { label: 'Graphics', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1e3f132c8dcbca9eb5fcc03ad4e49a819b31584f7dc2f591244dfe03faf345f6?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40' },
];

const SidebarMenu: React.FC = () => {
  return (
    <nav className={styles.menuSidebar}>
      <ul className={styles.menuList}>
        {menuItems.map((item, index) => (
          <li key={index} className={`${styles.menuItem} ${item.active ? styles.active : ''}`}>
            <a href="#" className={styles.menuLink}>
              <img src={item.icon} alt="" className={styles.menuIcon} />
              <span className={styles.menuLabel}>{item.label}</span>
              {item.hasSubmenu && (
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0d46b0971c23d94218240d83224d0dff10c41ace90c7ba9125a0b7dabf15867?placeholderIfAbsent=true&apiKey=761b6e6b1cdb4241a9278975fab25b40" alt="" className={styles.submenuIcon} />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarMenu;
