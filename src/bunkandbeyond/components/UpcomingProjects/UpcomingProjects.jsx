import React from 'react';
import styles from './UpcomingProject.module.css';
import Delhi from '../../assets/upcomingprojects/delhi.png';
import Hyderabad from '../../assets/upcomingprojects/hyd.png';
import Bangalore from '../../assets/upcomingprojects/blr.png';
import Mumbai from '../../assets/upcomingprojects/mbai.jpg';
import Pune from '../../assets/upcomingprojects/pune.jpg';

const UpcomingProjects = () => {
  return (
    <>
     <h2 className={styles.heading}>Coming Soon</h2>
    <div className={styles.container}>
     
      <div className={styles.projects}>
        <div className={styles.project}>
          <img src={Delhi} alt="Delhi" className={styles.image} />
          <p className={styles.name}>Delhi</p>
        </div>
        <div className={styles.project}>
          <img src={Hyderabad} alt="Hyderabad" className={styles.image} />
          <p className={styles.name}>Hyderabad</p>
        </div>
        <div className={styles.project}>
          <img src={Bangalore} alt="Bengaluru" className={styles.image} />
          <p className={styles.name}>Bengaluru</p>
        </div>
        <div className={styles.project}>
          <img src={Mumbai} alt="Bengaluru" className={styles.image} />
          <p className={styles.name}>Mumbai</p>
        </div>
        <div className={styles.project}>
          <img src={Pune} alt="Bengaluru" className={styles.image} />
          <p className={styles.name}>Pune</p>
        </div>
      </div>
      
    </div>
    <div className={styles.arrow}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.3 8.3L10.3 12.3L10.3 4.3" stroke="#626262" strokeWidth="2"/>
        </svg>
      </div>
    </>
  );
};

export default UpcomingProjects;
