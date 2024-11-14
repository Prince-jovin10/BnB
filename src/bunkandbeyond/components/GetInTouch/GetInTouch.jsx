import React from 'react';
import styles from './GetInTouch.module.css';
import Background from '../../assets/form/background.png';


const GetInTouch = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.form}>
        <h2>Get in Touch</h2>
        <p>Let us know how we can help you!</p>
        <form>
          <div className={styles.inputGroupName1}>
            <input type="text" placeholder="Last Name" />
            
          </div>
          <div className={styles.inputGroupName2}>
            <input type="text" placeholder="First Name" />
            
          </div>
          
          <div className={styles.inputGroupMail}>
            <input type="email" placeholder="Email" />
          </div>
          <div className={styles.inputGroupPhone}>
            <input type="tel" placeholder="+91 - Phone Number" />
          </div>
          <div className={styles.inputGroupMessage}>
            <textarea placeholder="Message" />
          </div>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <label>By clicking this, I agree to the <a href="#">terms and conditions</a></label>
          </div>
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
