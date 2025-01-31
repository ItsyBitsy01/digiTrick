import React,{useState} from "react";
import './training.css'; 
import NavBar from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/NavBar/index.js";
import Banner from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/SectionBanner/Banner.js";
import AboutImg from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/images/webDeve.jpg"
import Fade from 'react-reveal/Fade'; 
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const WebDevelopment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <>
     <Sidebar isOpen={isOpen} toggle={toggle} />
     <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={AboutImg} title="Web Development at Digi Trick" btnClass="hide" />
      <div className="training-page">
        <Fade bottom>
          <h1>Web Development Services at Digi Trick Consultancy</h1>
<br/>
          <p>
            In the digital era, your website is the face of your business. At Digi Trick Consultancy, we understand the importance of a well-designed, functional, and user-friendly website in establishing your online presence. Our Web Development services are tailored to create websites that not only look great but also perform seamlessly, providing an exceptional user experience that drives business growth.
          </p>
          <br/>
        </Fade>

        <section className="training-section">
          <Fade bottom>
            <h2>Our Web Development Services</h2>
            <h3>1. Custom Website Development</h3>
            <p>
              Every business is unique, and your website should reflect that. Our Custom Website Development service focuses on building websites that are tailor-made to suit your specific needs and goals.
              <ul>
              <li>Fully customized website design and development</li>
              <li>Integration of brand-specific elements and features</li>
              <li>Mobile-friendly and responsive design</li>
              <li>Scalable architecture to grow with your business</li>
              <li>Cross-browser compatibility</li>
            </ul>
            </p>
            
          </Fade>

          <Fade bottom>
            <h3>2. E-Commerce Development</h3>
            <p>
              Our E-Commerce Development services are designed to create user-friendly, secure, and scalable online stores that drive sales and enhance customer satisfaction.
              <ul>
              <li>Custom e-commerce website design and development</li>
              <li>Integration with popular payment gateways</li>
              <li>Secure shopping cart and checkout processes</li>
              <li>Inventory management and product catalog setup</li>
              <li>Optimization for mobile shopping and fast load times</li>
            </ul>
            </p>
            
          </Fade>

          <Fade bottom>
            <h3>3. Content Management Systems (CMS)</h3>
            <p>
              Our CMS Development services provide you with powerful, intuitive content management systems that allow you to update and manage your website content with ease.
              <ul>
              <li>Development on popular CMS platforms like WordPress, Joomla, and Drupal</li>
              <li>Easy-to-use interfaces for content updates and management</li>
              <li>Custom plugins and extensions to enhance functionality</li>
              <li>SEO-friendly structures and tools</li>
              <li>Training and support for your team</li>
            </ul>
            </p>
            
          </Fade>

          <Fade bottom>
            <h3>4. Web Application Development</h3>
            <p>
              Our Web Application Development services are here to help if your business requires complex functionality or interactive features.
              <ul>
              <li>Development of custom web applications for various business needs</li>
              <li>Integration with existing systems and third-party APIs</li>
              <li>Focus on performance, scalability, and security</li>
              <li>User-friendly interfaces and seamless user experiences</li>
              <li>Comprehensive testing and quality assurance</li>
            </ul>
            </p>
            
          </Fade>

          <Fade bottom>
            <h3>5. Website Maintenance and Support</h3>
            <p>
              Our Website Maintenance and Support services ensure that your site is always up-to-date, secure, and functioning at its best.
              <ul>
              <li>Regular updates and security patches</li>
              <li>Performance monitoring and optimization</li>
              <li>Backup and recovery services</li>
              <li>Content updates and design tweaks</li>
              <li>Technical support and troubleshooting</li>
            </ul>
            </p>
            
          </Fade>

          <Fade bottom>
            <h3>6. SEO Integration and Optimization</h3>
            <p>
              Our SEO Integration and Optimization services ensure that your website is built with search engine visibility in mind, helping you attract more visitors and convert them into customers.
              <ul>
              <li>On-page SEO optimization during development</li>
              <li>Integration of SEO best practices into design and structure</li>
              <li>Keyword research and content optimization</li>
              <li>Technical SEO audits and fixes</li>
              <li>Ongoing SEO support and monitoring</li>
            </ul>
            </p>
            
          </Fade>
        </section>

        <section className="training-section">
          <Fade bottom>
          <br/><br/>
            <h2>Why Choose Digi Trick Consultancy for Web Development?</h2>
            <ul>
              <li>Experienced Team: Our web developers are skilled in the latest technologies and trends.</li>
              <li>Tailored Solutions: We tailor our web development services to meet your specific requirements.</li>
              <li>User-Centric Design: We focus on creating websites that provide an exceptional user experience.</li>
              <li>Full-Service Offering: We offer a complete web development solution from design to maintenance.</li>
              <li>Commitment to Quality: We are dedicated to delivering high-quality websites that exceed your expectations.</li>
            </ul>
          </Fade>
        </section>

        <section className="training-section" id="last">
          <Fade bottom>
            <br/><br/>
            <h2>Get Started with Digi Trick Consultancy’s Web Development Services Today</h2>
            <p>
              Ready to create a website that sets your business apart? Digi Trick Consultancy is here to make it happen. Whether you need a new website from scratch or want to revamp your existing site, our team of experts is ready to deliver a solution that aligns with your business goals. Contact us today to discuss your web development needs and take the first step toward a stronger online presence.
            </p>
          </Fade>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default WebDevelopment;
