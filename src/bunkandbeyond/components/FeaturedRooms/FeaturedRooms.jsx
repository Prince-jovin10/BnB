import React from 'react';
import styles from './FeaturedRooms.module.css';
import Room1 from '../../assets/rooms/room1.jpg';
import Room2 from '../../assets/rooms/room2.jpg';
import Room3 from '../../assets/rooms/room3.jpg';
import Room4 from '../../assets/rooms/room4.jpg';


const FeaturedRooms = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Featured Rooms</h2>
      </div>
      <div className={styles.gallery}>
        <div className={styles.imageContainer}>
          <img src={Room1} alt="Room 1" />
        </div>
        <div className={styles.imageContainer}>
          <img src={Room2} alt="Room 2" />
        </div>
        <div className={styles.imageContainer}>
          <img src={Room3} alt="Room 3" />g
        </div>
         <div className={styles.imageContainer}>
          <img src={Room4} alt="Room 4" />
        </div> 
      </div>
      {/* <div className={styles.viewMore}>
        <a href="#">View More</a>
      </div> */}
      <div className={styles.headercomponent}>
      <div className={styles.header1}>
              <h3>Pricing Plans</h3>
          </div>
      <div className={styles.options}>
        <div className={styles.option}>
          <h3>Invest with Us</h3>
          <p>
            Co-Hostel Ownership: Investment-based option with profit-sharing benefits.
          </p>
          <p className={styles.price}>₹ 14,40,000/-</p>
          <ul className={styles.features}>
            <li>✔ 10% guaranteed annual returns</li>
            <li>✔ Property management included</li>
            <li>✔ Complimentary Stays</li>
          </ul>
          <button className={styles.button1}>Contact Us</button>
        </div>
        
         
        
        <div className={styles.option}>
          <h3>Rent with Us</h3>
          <p>
            Affordable monthly stay for regular guests.
          </p>
          <p className={styles.price}>₹ 9,499/-</p>
          <ul className={styles.features}>
            <li>✔ Fully furnished rooms</li>
            <li>✔ 24/7 Access</li>
            <li>✔ Daily housekeeping</li>
          </ul>
          <div>
           <button className={styles.button2}>Book Now</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRooms;