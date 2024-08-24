import React from "react";
import styles from './NavBar.module.css';

interface IconProps {
  src: string;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <img loading="lazy" src={src} className={styles.icon} alt={alt} />;
}

export default Icon;
