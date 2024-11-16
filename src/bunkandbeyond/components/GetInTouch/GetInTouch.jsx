import React, { useState } from 'react';
import styles from './GetInTouch.module.css';
import Background from '../../assets/form/background.png';

import axios from 'axios'


const GetInTouch = () => {

  const initialFormData = {
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    message:"",
    agreeTerms:false
  }

  const [formData, setFormData] = useState(initialFormData)

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const submitContactDetails = async () => {
    try {
      // const response = await axios.post(URL, formData, {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "x-api-key": "Fracspace@2024"
      //   }
      // });
      // console.log(response.data);
      console.log("success", formData)
    } catch (error) {
      console.log("error is", error);
    }
  };

  const handleChange = (e) =>{
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();



    // Handle form submission

   
    if (!formData.agreeTerms) {
      alert("Please click the checkbox to confirm that Fracspace can contact you before submitting your details.");
      return;
    }

    submitContactDetails();
    setShowSuccessMessage(true);

    //  console.log("Form data:", formData);

    // alert("Form submitted!");
    setFormData(initialFormData);
    // console.log("Form data:", formData);

    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 6000);
  };

 
  

  return (
    <div className={styles.container}>
      
      <div className={styles.form}>
        <h2>Get in Touch</h2>
        <p>Let us know how we can help you!</p>
        <form onSubmit={handleSubmit}> 

        <div className={styles.inputGroupName1}>
            <input required  name="firstName" type="text" value={formData?.firstName} placeholder="First Name" onChange={handleChange} />  
          </div>


          <div className={styles.inputGroupName2}>
            <input required  name="lastName" type="text" value={formData?.lastName} placeholder="Last Name" onChange={handleChange} />
          </div>
          
          
          <div className={styles.inputGroupMail}>
            <input required  name="email" type="email" value={formData?.email} placeholder="Email" onChange={handleChange} />
          </div>
          <div className={styles.inputGroupPhone}>
            <input required  name="phone" type="tel" value={formData?.phone} placeholder="Phone Number" onChange={handleChange} />
          </div>
          <div className={styles.inputGroupMessage}>
            <textarea required  name="message" value={formData?.message} placeholder="Message"  onChange={handleChange}/>
          </div>
          <div className={styles.checkbox}>
            <input className={styles.input} name='agreeTerms' required value={formData?.agreeTerms} type="checkbox" onChange={handleChange} />
            <label className={styles.label}> By submitting your contact details, you authorize BunkNBeyond and its representatives to contact you.</label>
          </div>
          <button type="submit" className={styles.button}>Submit</button>
          {showSuccessMessage && (
                  <div className={styles.successMessage}>
                    Thank you for reaching out! We’ve received your inquiry and
                    our team is already on it. 
                  </div>
                )}
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
