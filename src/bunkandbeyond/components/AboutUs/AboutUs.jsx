import React from 'react';
import styles from './AboutUs.module.css';
import AboutUs1 from '../../assets/aboutus/aboutus1.jpg';
import AboutUs2 from '../../assets/aboutus/aboutus2.jpg';

const AboutUs = () => {
  return (
    <div className={styles.container}>
        <div className={styles.parentimgcontainer}/>
        <div className={styles.imageContainer2}>
        <img src={AboutUs2} alt="Hostel Interior" className={styles.image} />
        
      </div>
      
      <div className={styles.imageContainer1}>
        <img src={AboutUs1} alt="Hostel Interior" className={styles.image} />
        
      </div>
      
      <div className={styles.textContainer}>
        <h2 className={styles.title}>About us</h2>
        <p className={styles.description}>
          Bunk and Beyond is redefining the hostel experience for young men with our luxury hostel concept. Situated in the heart of Banjara Hills, Hyderabad, we combine comfort, style, and convenience to offer an unparalleled stay. From premium amenities to a welcoming community, we aim to provide a space that feels like home.
        </p>
        <button className={styles.learnMoreButton}>Contact Us →</button>
      </div>
    </div>
  );
};

export default AboutUs;
