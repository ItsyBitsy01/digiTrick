import React,{useState} from "react";
import './training.css'; 
import NavBar from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/NavBar/index.js";
import Banner from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/components/SectionBanner/Banner.js";
import AboutImg from "/Users/shairinmeraj/Desktop/Things/Afucent/digiTrick/src/images/digiMark.jpg"; 
import Fade from 'react-reveal/Fade'; 
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const DigitalMarketing = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
 
  return (
    <>
     <Sidebar isOpen={isOpen} toggle={toggle} />
     <NavBar toggle={toggle} />
      <Banner cName="banner-mid" bannerImg={AboutImg} title="Digital Marketing at Digi Trick" btnClass="hide" />
      <div className="training-page">
        <Fade bottom>
          <h1>Digital Marketing Services at Digi Trick Consultancy</h1>

          <p>
            In today’s digital age, having a strong online presence is essential for any business looking to thrive. At Digi Trick Consultancy, we offer comprehensive Digital Marketing services designed to help you connect with your target audience, enhance your brand visibility, and drive meaningful engagement. Our goal is to turn your digital platforms into powerful tools for growth and success.
          </p>
        </Fade>

        <section className="training-section">
          <Fade bottom>
            <h2>Our Digital Marketing Services</h2>
            <br/>
            <h3>1. Search Engine Optimization (SEO)</h3>
            <p>
              Maximize your visibility on search engines with our SEO services that improve your website’s ranking on search engine results pages (SERPs).
              <ul>
              <li>Comprehensive keyword research and strategy</li>
              <li>On-page and off-page optimization</li>
              <li>Technical SEO audits and fixes</li>
              <li>Content creation and optimization for SEO</li>
              <li>Regular performance tracking and reporting</li>
            </ul>
            </p>
            
          </Fade>

          <Fade bottom>
            <h3>2. Social Media Marketing</h3>
            <p>
              Our Social Media Marketing services help create and execute campaigns that resonate with your audience, drive engagement, and build brand loyalty.
              <ul>
              <li>Social media strategy development</li>
              <li>Content creation and curation</li>
              <li>Paid advertising campaigns on platforms like Facebook, Instagram, LinkedIn, and Twitter</li>
              <li>Community management and engagement</li>
              <li>Analytics and performance monitoring</li>
            </ul>
            </p>
            
          </Fade>

          <Fade bottom>
            <h3>3. Pay-Per-Click (PPC) Advertising</h3>
            <p>
              Our PPC services focus on creating high-converting ads that reach the right audience at the right time, maximizing your ROI.
              <ul>
              <li>Keyword research and competitive analysis</li>
              <li>Ad creation and copywriting</li>
              <li>Campaign setup and management on platforms like Google Ads and Bing Ads</li>
              <li>A/B testing and optimization</li>
              <li>Detailed performance tracking and reporting</li>
            </ul>
            </p>
           
          </Fade>

          <Fade bottom>
            <h3>4. Content Marketing</h3>
            <p>
              Our Content Marketing services help create valuable and consistent content that attracts and engages your target audience.
              <ul>
              <li>Content strategy and planning</li>
              <li>Blog and article writing</li>
              <li>Video production and marketing</li>
              <li>Infographic creation and distribution</li>
              <li>Content promotion and outreach</li>
            </ul>
            </p>
            
          </Fade>

          <Fade bottom>
            <h3>5. Email Marketing</h3>
            <p>
              Our Email Marketing services focus on creating personalized, targeted campaigns that nurture leads and encourage conversions.
              <ul>
              <li>Email list segmentation and management</li>
              <li>Campaign design and automation</li>
              <li>Personalized email content and copywriting</li>
              <li>Performance tracking and A/B testing</li>
            </ul>
            </p>
           
          </Fade>

          <Fade bottom>
            <h3>6. Web Design and Development</h3>
            <p>
              Our Web Design and Development services ensure that your website is visually appealing, user-friendly, responsive, and optimized for conversions.
              <ul>
              <li>Custom website design and development</li>
              <li>Mobile-friendly and responsive design</li>
              <li>User experience (UX) and user interface (UI) design</li>
              <li>Website maintenance and updates</li>
              <li>SEO integration and optimization</li>
            </ul>
            </p>
            
          </Fade>
        </section>

        <section className="training-section" id="last">
          <Fade bottom>
            <br/>
            <h2>Why Choose Digi Trick Consultancy for Digital Marketing?</h2>
            <ul>
              <li>Expert Team: Our digital marketing team consists of experienced professionals who are experts in their respective fields.</li>
              <li>Customized Strategies: We tailor our strategies to meet the specific needs and goals of your business.</li>
              <li>Results-Driven Approach: We focus on delivering measurable results that align with your business objectives.</li>
              <li>Comprehensive Service: We offer end-to-end digital marketing services.</li>
              <li>Transparent Communication: You’ll receive regular updates and detailed reports on the progress of your campaigns.</li>
            </ul>
          </Fade>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default DigitalMarketing;
