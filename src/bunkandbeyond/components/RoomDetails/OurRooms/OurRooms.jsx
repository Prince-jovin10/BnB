import React, { useState } from 'react';
import styles from './OurRooms.module.css';
import Room1 from '../../../assets/roomdetails/ourrooms/room1.png';
import Room2 from '../../../assets/roomdetails/ourrooms/room2.jpg';
import Room3 from '../../../assets/roomdetails/ourrooms/room3.jpg';
import Room4 from '../../../assets/roomdetails/ourrooms/room4.jpg';

const OurRooms = () => {
  const [showAC, setShowAC] = useState(true);

  const handleToggle = () => {
    setShowAC(!showAC);
  };

  const rooms = [
    {
      image: Room1,
      name: 'Deluxe Room',
      price: 'Rs. 15,000/-',
      occupancy: 'Single Occupancy',
      features: ['AC Room', 'Common Bathroom', 'Common Balcony'],
      availability: 'Only 2 rooms left',
      availabilityColor: '#6dbd56',
      type: 'AC',
    },
    {
      image: Room2,
      name: 'Elite Room',
      price: 'Rs. 12,000/-',
      occupancy: 'Double Share',
      features: ['AC Room', 'Attached Bathroom', 'Common Balcony'],
      availability: 'Only 4 rooms left',
      availabilityColor: '#6dbd56',
      type: 'AC',
    },
    {
      image: Room3,
      name: 'Superior Six-Share Room',
      price: 'Rs. 10,000/-',
      occupancy: 'Six Share',
      features: ['Non-AC Room', 'Common Bathroom', 'Common Balcony'],
      availability: 'Only 3 rooms left',
      availabilityColor: '#6dbd56',
      type: 'Non-AC',
    },
    {
      image: Room4,
      name: 'Standard Four-Share Room',
      price: 'Rs. 11,000/-',
      occupancy: 'Four Share',
      features: ['Non-AC Room', 'Common Bathroom', 'Common Balcony'],
      availability: 'No Rooms Left',
      availabilityColor: '#d9534f',
      type: 'Non-AC',
    },
  ];

  return (
    <div className={styles.ourRooms}>
      <h2 className={styles.title}>Our Rooms</h2>
      <div className={styles.toggleContainer}>
        <button
          className={`${styles.toggleButton} ${showAC ? styles.active : ''}`}
          onClick={handleToggle}
        >
          AC
        </button>
        <button
          className={`${styles.toggleButton} ${!showAC ? styles.active : ''}`}
          onClick={handleToggle}
        >
          Non-AC
        </button>
      </div>
      <div className={styles.roomsGrid}>
        {rooms
          .filter(room => (showAC ? room.type === 'AC' : room.type === 'Non-AC'))
          .map((room, index) => (
            <div key={index} className={styles.roomCard}>
              <div className={styles.imageContainer}>
                <img src={room.image} alt={room.name} className={styles.roomImage} />
                <span
                  className={styles.availability}
                  style={{ backgroundColor: room.availabilityColor }}
                >
                  {room.availability}
                </span>
              </div>
              <div className={styles.roomDetails}>
                <h3 className={styles.roomName}>
                  {room.name} - {room.price}
                </h3>
                <p className={styles.occupancy}>{room.occupancy}</p>
                <div className={styles.features}>
                  {room.features.map((feature, idx) => (
                    <p key={idx} className={styles.feature}>
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OurRooms;
