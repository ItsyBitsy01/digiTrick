import "./CardStyles.css";
import CardData from "./CardData";
import img1 from "../../images/digiTrick.jpeg";
import img2 from "../../images/digiTrick.jpeg"
function Card2() {
  return (
    <div className="trip">
      <h1>Digital Transformation</h1>
      
      <div className="tripcard">
        <CardData
          image={img1}
          heading="Digital Strategy & Consulting"
      
        />
        <CardData
          image={img2}
          heading="Solutions by leveraging cutting-edge technologies"
    
        />
        
       
      </div>
    </div>
  );
}
export default Card2;