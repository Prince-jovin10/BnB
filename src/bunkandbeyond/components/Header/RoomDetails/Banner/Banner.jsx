import React from 'react';
import styles from './Banner.module.css';
import whatsapp from '../../../../assets/roomdetails/banner/whatsapp.png';
import phone from '../../../../assets/roomdetails/banner/phone.png';
import clock from '../../../../assets/roomdetails/banner/clock.png';


const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Escape the ordinary; embrace the extraordinary at
          <br />
          <span className={styles.brandName}>Bunk n Beyond.</span>
        </h1>
        <p className={styles.subtitle}>
          Why compromise? Elevate your stay with premium living at Bunk and Beyond.
        </p>
        <button className={styles.exploreButton}>Explore</button>
      </div>
      <div className={styles.footer}>
        <div className={styles.info}>
          <span className={styles.icon}><img src={clock} alt="" /></span>
          <p>24/7 Access</p>
        </div>
        <div className={styles.infowhatsapp}>
          <span className={styles.whatsappIcon}><img src={whatsapp} alt="" /></span>
          <p>WhatsApp</p>
        </div>
        <div className={styles.info}>
          <span className={styles.phoneIcon}><img src={phone}/></span>
          <p>+91 8309047176</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
