import React, { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/icon/Logo.png";
// import Banner from './RoomDetails/Banner/Banner.jsx';
// import OurRooms from './RoomDetails/OurRooms/OurRooms.jsx';
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  // const [showRoomDetails, setShowRoomDetails] = useState(false);

  // const handleRoomDetailsClick = () => {
  //   setShowRoomDetails(!showRoomDetails);
  // };

  const whatsappNumber = 8309047176

  const navigate = useNavigate()

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          {/* <Link to={'/'}> */}
          <img onClick={()=>navigate('/')} src={Logo} alt="Bunk Beyond Logo" />
          {/* </Link> */}
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link className={styles.navItem} to="/"> Home</Link>
              {/* <a href="#">Home</a> */}
            </li>
            <li>
              <Link className={styles.navItem} to="/roomdetails">Room Details</Link>
              {/* <a href="#" onClick={handleRoomDetailsClick}>
                Room Details
              </a> */}
            </li>
            <li>
              <Link
                to={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navItem}
              >
                Contact us
              </Link>
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
