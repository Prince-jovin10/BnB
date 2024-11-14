import React from 'react';
import styles from './Location.module.css';
import Map from '../../assets/map/map.png';



const Location = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Location</h3>
      <div className={styles.mapContainer}>
        <img
          className={styles.mapImage}
          src={Map} 
          alt="Map Location"
        />
      </div>
    </div>
  );
};

export default Location;
