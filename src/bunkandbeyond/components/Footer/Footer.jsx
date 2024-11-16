import styles from './Footer.module.css';
import Icon from '../../assets/icon/bnb.png';
import whatsapp from '../../assets/roomdetails/banner/whatsappicon.png';
import instagram from '../../assets/roomdetails/banner/instagram.png';

import { Link, useNavigate } from 'react-router-dom';


const Footer = () => {

  const navigate = useNavigate()

  const whatsappNumber = 8309047176

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          
          <img onClick={()=>navigate('/')} src={Icon} alt="Bunk Beyond Logo" />
          
          {/* <p className={styles.tagline}>YOUR HOME AWAY FROM HOME</p> */}
        </div>
        <div className={styles.contact}>
          <h3>Contact Us</h3>
          <p>Tel: 91 83090 47176</p>
        </div>
        <div className={styles.address}>
          <h3>Address</h3>
          <p>
            3rd Floor, RK Residency, Near Ahmed Dairy Farm, Road no. 11, Avenue
            4, Banjara Hills, Hyderabad, 500034
          </p>
        </div>
        <div className={styles.social}>
          
          <h3>Follow us at</h3>
          <div className={styles.socialinfo}>
            <div className={styles.logo1}>
            <Link
                to={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              > 
            <img src={whatsapp}/>
            </Link>
            </div>
            <div className={styles.logo2}>
            <Link
                to={`https://www.instagram.com/bunknbeyondbnb/`}
                target="_blank"
                rel="noopener noreferrer"
              >  
            <img src={instagram}/>
            </Link>
            </div>
            
         
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;