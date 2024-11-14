import styles from './Footer.module.css';
import Icon from '../../assets/icon/logo.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Icon} alt="Bunk Beyond Logo" />
          <p className={styles.tagline}>YOUR HOME AWAY FROM HOME</p>
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
          <a href="#">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;