import { NavLinks } from "../NavBar/NavBarElement";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="t">
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://www.linkedin.com/company/afucent-technologies/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
        <NavLinks to='/'> <h4>Home</h4></NavLinks>
       
        </div>
        <div>
        <NavLinks to='/service'>  <h4>Services</h4> </NavLinks>
          
        </div>
        <div>
        <NavLinks to='/expertise'> <h4>Expertise</h4> </NavLinks>
          
      </div>
        <div>
     <NavLinks to='/about'>  <h4>About Us</h4></NavLinks>
          
        </div>
        <div>
        <NavLinks to='/careers'>   <h4>Careers</h4> </NavLinks>
          
      </div>
    </div>
    <div className="end"><h5>© Copyright 2023. All rights reserved.</h5></div></div>
  );
};
export default Footer;
