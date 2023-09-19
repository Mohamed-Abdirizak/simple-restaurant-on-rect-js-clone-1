import React from "react";
import "./secondComponents.css";
import image from './images/w.jpeg';
import playbutton from './images//play-button.png'
const SecondComponents = () => {
  return (
    <div className="text-container paddings">
      {/* ...........................left side........................................................ */}
      <div className="left-text">
        <h2 className="topic">Delicious & Affordable</h2>
        
      
        <h2 className="bluebg"> Meals Near You.</h2>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <div className="btnand">
          {/* <div className="orderBtnDiv"> */}
          <button className="orderNowBtn">ORDER NOW</button> 
          {/* </div> */}
        <div className="playClassDiv">
        <img src={playbutton} className="playButton" alt="playbutton" />
          
        </div>
       
        <p className="test">Meet The Chef</p>

        </div>
      
      </div>

      {/*.......................................... right side image....................................................................... */}
      <div className="right-text paddings">
        <img className="food1Img" src={image} alt="pizza food"   />


      </div>


      
    </div>
  );
};

export default SecondComponents;
