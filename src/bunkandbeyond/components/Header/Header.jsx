import React, { useState } from 'react';
import styles from './Header.module.css';
import Logo from '../../assets/icon/Logo.png';
// import Banner from './RoomDetails/Banner/Banner.jsx';
// import OurRooms from './RoomDetails/OurRooms/OurRooms.jsx';
import { Link } from 'react-router-dom';

const Header = () => {
  // const [showRoomDetails, setShowRoomDetails] = useState(false);

 
  // const handleRoomDetailsClick = () => {
  //   setShowRoomDetails(!showRoomDetails);
  // };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={Logo} alt="Bunk Beyond Logo" />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to ='/'> Home
              </Link>
              {/* <a href="#">Home</a> */}
            </li>
            <li>
             <Link to ='/roomdetails'>
               Room Details
             </Link>
              {/* <a href="#" onClick={handleRoomDetailsClick}>
                Room Details
              </a> */}
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </nav>
      </header>

      
      {/* {showRoomDetails && (
        <div>
          <Banner />
          <OurRooms />
        </div>
      )} */}
    </>
  );
};

export default Header;
