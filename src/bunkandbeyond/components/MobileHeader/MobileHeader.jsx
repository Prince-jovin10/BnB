import React, { useState } from 'react';
import styles from './MobileHeader.module.css';
import bnb from '../../assets/icon/Logo.png';
import { Link } from 'react-router-dom';


const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={bnb} alt="BUNK N BEYOND Logo" />
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {isMenuOpen && (<div className={styles.menu}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            &times;
          </button>
          < Link to={'/'} className={styles.menuItem}>Home</Link>
          <Link to={'/roomdetails'} className={styles.menuItem}>Room Details</Link>
          <Link >Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
