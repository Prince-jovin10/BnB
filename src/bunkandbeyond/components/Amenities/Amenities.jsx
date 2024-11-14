  import React from 'react';
  import styles from './Amenities.module.css';
  import Fridge from '../../assets/amenities/fridge.png';
  import Couch from '../../assets/amenities/couch.png';    
  import Kitchen from '../../assets/amenities/kitchen.svg';
  import Smoking from '../../assets/amenities/smokingarea.png';
  import CCTV from '../../assets/amenities/cctv.png';
  import TV from '../../assets/amenities/tv.png';
  import WashingMachine from '../../assets/amenities/washingmachine.png'; 
  import AC from '../../assets/amenities/ac.png';



  const Amenities = () => {
    return (
      <div className={styles.amenitiesSection}>
        <h2 className={styles.title}>Amenities</h2>
        <div className={styles.amenitiesContainer}>
          <div className={styles.amenity}>
            < div className={styles.icon} />
            <p><img src={Couch} /> <br/> Couch </p>
          </div>
          <div className={styles.amenity}>
            <div className={styles.icon1} />
            <p> <img src={Fridge} /> <br/>Fridge </p>
          </div>
          <div className={styles.amenity}>
            <div className={styles.icon2} />
            <p> <img src={Kitchen} /><br/> Kitchen </p>
          </div>
          <div className={styles.amenity}>
            <div className={styles.icon3} />
            <p> <img src={CCTV} /><br/> CCTV </p>
          </div>
          <div className={styles.amenity}>
            <div className={styles.icon4} />
            <p><img src={TV} /><br/>TV </p>
          </div>
          <div className={styles.amenity}>
            <div className={styles.icon5} />
            <p> <img src={WashingMachine} /> <br/>  Washing Machine   </p>
          </div>
          <div className={styles.amenity}>
            <div className={styles.icon6} />
            <p> <img src={AC} /> <br/>AC </p>
          </div>
          <div className={styles.amenity}>
            <div className={styles.icon7} />
            <p><img src={Smoking} /><br/>Smoking Area</p>
          </div>
        </div>
      </div>
    );
  };

  export default Amenities;
