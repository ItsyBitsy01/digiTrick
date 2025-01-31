import React,{useState} from "react";
import './training.css'; 
import NavBar from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/NavBar/index.js";
import Banner from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/SectionBanner/Banner.js";
import SoftwareImg from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/images/seo.jpg";
import Fade from 'react-reveal/Fade'; 
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";


const SoftwareDevelopmentServices = () => {const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <>
   <Sidebar isOpen={isOpen} toggle={toggle} />
   <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={SoftwareImg} title="Tailored Software Development Services at Digi Trick" btnClass="hide" />
      <div className="training-page">
        <Fade bottom>
          <h1>Building Innovative Software Solutions to Empower Your Business</h1>

          <p>
            At Digi Trick Consultancy, we specialize in delivering custom software solutions that help businesses achieve their objectives efficiently and effectively. Our software development services are designed to cater to a wide range of industries, ensuring that our clients have the tools they need to stay ahead in a competitive market.
          </p>
        </Fade>

        <section className="training-section">
          <Fade bottom><br/><br/>
            <h2>Key Services We Offer:</h2>

            <ul>
              <li><strong>Custom Application Development:</strong> We develop software from the ground up, ensuring it aligns perfectly with your business processes and goals.</li>
              <li><strong>Web and Mobile Development:</strong> Our team creates intuitive and responsive web applications as well as high-performance mobile apps for both Android and iOS platforms.</li>
              <li><strong>Software Integration:</strong> Seamlessly integrate new software into your existing infrastructure with our expert API and third-party software integration services.</li>
              <li><strong>Legacy Software Modernization:</strong> Upgrade outdated systems with modern, scalable software solutions that improve functionality and performance.</li>
              <li><strong>Cloud-Based Solutions:</strong> Leverage the power of cloud computing with secure and scalable cloud software development.</li>
              <li><strong>Ongoing Support and Maintenance:</strong> We offer post-launch support to keep your software running smoothly, with regular updates and troubleshooting as needed.</li>
            </ul>
          </Fade>
        </section>

        <section className="training-section">
          <Fade bottom><br/><br/>
            <h2>Why Work with Digi Trick Consultancy?</h2>
            <ul>
              <li><strong>Customized Solutions:</strong> We take the time to understand your unique needs and tailor our software solutions to your specific business objectives.</li>
              <li><strong>Experienced Development Team:</strong> Our team of highly skilled developers uses the latest technologies and best practices to deliver top-tier software solutions.</li>
              <li><strong>Scalable and Flexible Approach:</strong> Whether you're a small business or a large enterprise, our solutions are scalable to grow alongside your company.</li>
              <li><strong>Agile Project Management:</strong> We follow agile methodologies, ensuring a collaborative, transparent, and efficient development process.</li>
            </ul>
          </Fade>
        </section>

        <section className="training-section" id="last">
          <Fade bottom><br/><br/>
            <h2>Transform Your Business</h2>
            <p>
              With Digi Trick Consultancy, you get more than just software—you get a strategic partner committed to delivering innovative solutions that drive success. Contact us today to explore how we can help transform your business through custom software development.
            </p>
          </Fade>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default SoftwareDevelopmentServices;
