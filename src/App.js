import './App.css';
import {Routes , Route} from 'react-router-dom';
import ScrollToTop from './scrollToTop.js';
import Home from './routes/index';

import Contact from './routes/Contact';
import Services from './components/Services';
import AboutUs from './tes/AboutUs';
import TrainingServices from './tes/training';
import JobSupport from './tes/support';
import DigitalMarketing from './tes/marketing';
import WebDevelopment from './tes/webd';
import MobileAppDevelopment from './tes/mobile';
import C2CandW2Services from './tes/c2';
import ECommerceSetupServices from './tes/ecomm';
import SoftwareDevelopmentServices from './tes/softw';



function App() {
  return (
    <>
  <ScrollToTop/>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="/trainings" element={<TrainingServices />} />
        <Route path="/jobsupport" element={<JobSupport />} />
        <Route path="/marketing" element={<DigitalMarketing />} />
        <Route path="/webdevelopment" element={<WebDevelopment />} />
        <Route path="/mobileappdevelopment" element={<MobileAppDevelopment />} />
        <Route path="/softwaredevelopment" element={<SoftwareDevelopmentServices />} />
        <Route path="/employments" element={<C2CandW2Services />} />
        <Route path="/ecommerce" element={<ECommerceSetupServices />} />
        
       {/* // <Route path="/" element={<Services />} /> */}
      </Routes>
      </>
  

  );
}

export default App;
