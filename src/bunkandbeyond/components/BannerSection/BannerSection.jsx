import React from 'react';
import styles from './BannerSection.module.css';
import Banner1 from '../../assets/banner/banner1.png';
import Banner2 from '../../assets/banner/banner2.jpg';

import { Link as ScrollLink } from "react-scroll";

const BannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerText}>
          <h1>INDULGE IN</h1>
          <h1>PRESTIGIOUS</h1>
          <h1>RESIDENCIES</h1>
          <p>Escape the ordinary<br/> embrace the extraordinary <br/>at Bunk and Beyond.</p>
          <ScrollLink to="about" smooth={true} duration={1000}>
          <button className={styles.getStartedBtn}>Get Started</button>
          </ScrollLink>
        </div>
        <div className={styles.bannerImage}>
          <img src={Banner1} alt="Luxury sofa in a modern living room" />
        </div>
      </div>
      <div className={styles.exploreElegant}>
        <h2>Explore Elegant</h2>
        <p>Explore Elegant Residencies that epitomize <br/>the perfect blend of style, luxury, comfort.</p>
        <div className={styles.exploreImage}>
          <img src={Banner2} alt="Balcony with a table and chairs overlooking the ocean" />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;