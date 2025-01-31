import React from "react";
import './training.css'; // Reusing the same CSS file for consistency
import NavBar from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/NavBar/index.js";
import Banner from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/SectionBanner/Banner.js";
import AboutImg from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/images/eComm.jpg";
import Fade from 'react-reveal/Fade'; // Import Fade for animation
import Footer from "../components/Footer";
import { useState } from 'react';
import Sidebar from "../components/Sidebar";

const ECommerceSetupServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={AboutImg} title="E-Commerce Setup Services at Digi Trick" btnClass="hide" />
      <div className="training-page">
        <Fade bottom>
          <h1>Launch Your Online Store with Confidence</h1>
<br/>
          <p>
            At Digi Trick Consultancy, we specialize in helping businesses transition seamlessly into the online marketplace with our comprehensive E-commerce setup services. Whether you're starting a new online store or looking to enhance an existing one, our team provides the expertise and support needed to create a successful e-commerce presence.
          </p>
        </Fade>

        <section className="training-section">
          <Fade bottom><br/><br/>
            <h2>Our E-Commerce Setup Services Include:</h2>

            <ul>
              <li><strong>Platform Selection and Integration:</strong> We assist in choosing the right e-commerce platform (such as Shopify, WooCommerce, Magento, etc.) that fits your business needs and integrate it with your existing systems.</li>
              <li><strong>Store Design and Development:</strong> Our team designs and develops visually appealing and user-friendly online stores that reflect your brand and engage your customers.</li>
              <li><strong>Product Listing and Management:</strong> We help you with product catalog creation, including detailed descriptions, high-quality images, and inventory management.</li>
              <li><strong>Payment Gateway Setup:</strong> Ensure secure and smooth transactions with our payment gateway integration services, offering a variety of payment options for your customers.</li>
              <li><strong>SEO and Marketing Strategies:</strong> Boost your online visibility with our SEO and digital marketing strategies designed to drive traffic and increase sales.</li>
              <li><strong>Training and Support:</strong> We provide training to your team on managing the e-commerce platform and ongoing support to ensure everything runs smoothly.</li>
            </ul>
          </Fade>
        </section>

        <section className="training-section">
          <Fade bottom><br/><br/>
            <h2>Why Choose Digi Trick Consultancy?</h2>
            <ul>
              <li><strong>Tailored Solutions:</strong> We offer customized e-commerce solutions based on your specific business goals and target audience.</li>
              <li><strong>End-to-End Service:</strong> From initial setup to ongoing maintenance, we provide a complete range of services to support your e-commerce journey.</li>
              <li><strong>Experienced Professionals:</strong> Our team of experts brings years of experience in e-commerce development and digital marketing to deliver top-notch results.</li>
            </ul>
          </Fade>
        </section>

        <section className="training-section" id="last">
          <Fade bottom><br/><br/>
            <h2>Transform Your Business</h2>
            <p>
              Transform your business with a powerful online store that attracts and converts customers. Contact Digi Trick Consultancy today to get started with our E-commerce setup services and take your business to new heights.
            </p>
          </Fade>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default ECommerceSetupServices;
