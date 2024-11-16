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
            <input type="text" placeholder="First Name" />  
          </div>


          <div className={styles.inputGroupName2}>
            <input type="text" placeholder="Last Name" />
          </div>
          
          
          <div className={styles.inputGroupMail}>
            <input type="email" placeholder="Email" />
          </div>
          <div className={styles.inputGroupPhone}>
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className={styles.inputGroupMessage}>
            <textarea placeholder="Message" />
          </div>
          <div className={styles.checkbox}>
            <input className={styles.input} type="checkbox" />
            <label className={styles.label}> By submitting your contact details, you authorize BunkNBeyond and its representatives to contact you.</label>
          </div>
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
