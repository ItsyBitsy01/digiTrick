import {ServicesH1} from "../components/Services/ServiceElements"
import "./contact.css";
import emailjs from '@emailjs/browser'; 
import React, {useRef, useState } from "react";
import Sidebar from "../components/Sidebar";
import ReCAPTCHA from "react-google-recaptcha";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutImg from "../images/contact.jpg";
import Banner from "../components/SectionBanner/Banner";

const Contact = () => {
  const [verified, setVerified]= useState(false); 
  const [isOpen, setIsOpen] = useState(false);
  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  
  }
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d02zhi9', 'template_tlw202w', e.target, '4TqjuHblDGoObDros')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
   
  };
  const captcha =useRef(null);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmit=(e)=>{
    sendEmail(e);
    captcha.current.reset();
  
    e.preventDefault();
  }
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.737391963776!2d80.94543321423654!3d26.848303669325077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd08a44d23df%3A0x942d741751b38cca!2sNew%20Janpath%20Complex%2C%20Ashok%20Marg%2C%20Sadullah%20Nagar%2C%20Narhi%2C%20Hazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh%20226001!5e0!3m2!1sen!2sin!4v1659702526654!5m2!1sen!2sin'
  return (
    <> 
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={AboutImg} title="Contact-Us" btnClass="hide" />
      <ServicesH1>Contact Us</ServicesH1>
      <section className='contacts padding'>
       
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe title="Advertisement" src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>4th Floor, New Janpath Complex 9 Ashok Marg, Hazratganj, Lucknow 226001</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> contact@afucent.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +91-9321800758</p>
              </div>
            </div>

            <form action='' onSubmit={handleSubmit}  >
              <div className='flexSB'>
                <input type='text' name="fullName" placeholder='Name' />
                <input type='email'name="email" placeholder='Email' />
              </div>
              <input type='text' name='message'placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <div className='recap'>
              <ReCAPTCHA ref={captcha} className='recap1'
    sitekey="6LcBU0kkAAAAAGYVcUP6sokXvLYNsOIaH4wjexS9"
    onChange={onChange}
  /></div>
              <button type='submit'  className='primary-btn' disabled={!verified} >SEND MESSAGE</button>
            </form>

           
          </div>
        </div>
      </section>
      <Footer/>
    </>

  )
}

export default Contact