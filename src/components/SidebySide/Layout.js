import "./Layout.css";
import second from "../../images/digiTrick copy.jpeg"
const Layout = () => {
  return (
    <div className="body">
    <div className="wrapper">
        <img className="lay" src={second} alt="pic"/>
        <div className="text-box">
          <div className="s-divi"><span>About Us</span></div>
           
            <br/>
            <p>Digi Trick Consultancy is a premier provider of digital solutions, dedicated to transforming businesses with innovative services. Our expertise spans across trainings, job support, digital marketing, SEO, domain and hosting, web development, mobile app development, and e-commerce setup. With a team of certified experts, we deliver affordable and effective SEO services, cutting-edge web and mobile app development, and comprehensive digital marketing strategies. Our mission is to bridge the talent gap by upskilling diverse candidates, ensuring our clients' workforce is future-ready. At DigiTrick Consultancy, we are committed to empowering businesses and individuals to achieve unparalleled success in the digital age.</p>

          
            
 
         </div>
    </div></div>
  );
};
export default Layout;
