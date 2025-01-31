import React,{useState} from "react";
import './training.css'; // Reusing the same CSS file for consistency
import NavBar from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/NavBar/index.js";
import Banner from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/SectionBanner/Banner.js";
import AboutImg from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/images/domain.jpg";
import Fade from 'react-reveal/Fade'; 
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const C2CandW2Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={AboutImg} title="C2C and W2 Employment Services at Digi Trick" btnClass="hide" />
      <div className="training-page">
        <Fade bottom>
          <h1>Streamline Your Hiring Process with Expert C2C and W2 Solutions</h1>

          <p>
            At Digi Trick Consultancy, we understand that finding the right talent can be a complex and time-consuming process. That's why we offer comprehensive C2C (Corp-to-Corp) and W2 employment services to simplify and enhance your hiring experience.
          </p>
        </Fade>

        <section className="training-section">
          <Fade bottom><br/><br/>
            <h2>C2C (Corp-to-Corp) Services</h2>

            <p>
              Our C2C services are designed for companies looking to engage independent contractors or consultants who operate as separate legal entities. This arrangement is ideal for businesses that need specialized skills on a project basis or for a fixed-term engagement. We handle all the intricacies of the C2C arrangement, including contract negotiations, compliance, and administrative support, so you can focus on achieving your business objectives.
            </p>
          </Fade>

          <Fade bottom><br/><br/>
            <h2>W2 Employment Services</h2>

            <p>
              With our W2 employment services, we take on the role of the employer of record for your staff. This means we handle payroll, taxes, and benefits administration, allowing you to concentrate on managing your team and driving your business forward. Whether you need temporary staff or long-term hires, our W2 solutions offer flexibility and efficiency while ensuring compliance with all employment regulations.
            </p>
          </Fade>
        </section>

        <section className="training-section">
          <Fade bottom><br/><br/>
            <h2>Why Choose Digi Trick Consultancy?</h2>
            <ul>
              <li>Expertise and Experience: Our team has extensive experience in managing both C2C and W2 employment arrangements, ensuring a smooth and compliant process.</li>
              <li>Comprehensive Support: From recruitment and contract management to payroll and compliance, we offer end-to-end support tailored to your specific needs.</li>
              <li>Custom Solutions: We understand that every business is unique. We provide customized solutions to fit your requirements and help you achieve your goals.</li>
            </ul>
          </Fade>
        </section>

        <section className="training-section" id="last">
          <Fade bottom><br/><br/>
            <h2>Partner with Digi Trick Consultancy</h2>
            <p>
              Partner with Digi Trick Consultancy for your C2C and W2 employment needs and experience a streamlined, efficient hiring process. Contact us today to learn more about how our services can benefit your organization.
            </p>
          </Fade>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default C2CandW2Services;
