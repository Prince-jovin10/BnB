import React, { useState } from 'react';
import styles from './MobileBanner.module.css';
import Banner1 from '../../assets/mobilebanner/img1.png';
import Banner2 from '../../assets/mobilebanner/img2.png';



const MobileBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const banners = [
    {
      image: Banner1,
      title: 'INDULGE IN PRESTIGIOUS RESIDENCIES',
      subtitle: 'Your Home Away From Home',
      className: styles.banner1,
    },
    {
      image: Banner2,
      title: 'ESCAPE THE ORDINARY; EMBRACE THE EXTRAORDINARY AT BUNK N BEYOND.',
      subtitle: '',
      className: styles.banner2,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className={`${styles.banner} ${banners[currentIndex].className}`} 
      style={{ backgroundImage: `url(${banners[currentIndex].image})` }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{banners[currentIndex].title}</h2>
        {banners[currentIndex].subtitle && (
          <p className={styles.subtitle}>{banners[currentIndex].subtitle}</p>
        )}
        <button className={styles.button}>Get Started</button>
      </div>
      <div className={styles.arrows}>
        <button className={styles.arrow} onClick={handlePrevious}>&lt;</button>
        <button className={styles.arrow} onClick={handleNext}>&gt;</button>
      </div>
    </div>
  );
};

export default MobileBanner;
