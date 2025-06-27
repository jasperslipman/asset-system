import React from 'react';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <div className={`${styles.navbar} section-horizontal-padding sub-section-padding css-grid`}>
        <img className={styles.logo} src="..\src\assets\Masters Logo.webp" alt="Big Agency Logo" />
    </div>

  );
};

export default NavBar;