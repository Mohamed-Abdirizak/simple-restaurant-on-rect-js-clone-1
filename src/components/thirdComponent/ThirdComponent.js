import React from 'react'
import image from '../secondComponent/images/4.jpg'
import './thirdComponent.css'
const ThirdComponent = () => {
  return (
    <div className="paddings text-containerth ">
    {/* ...........................left side........................................................ */}
    <div className="right-textth">
    <img className="food1Imgth" src={image} alt="pizza food"   />
    
    </div>

    {/*.......................................... right side image....................................................................... */}
    <div className="left-textth paddings">
        <h2 className='topicTh'>Established Since 2014</h2>

        <h1 className='servingFor'>We've been serving for</h1>
        <h1 className='bluebg'>over 5 years.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <button>Latest Offers</button>
        


    </div>


    
  </div>
  )
}

export default ThirdComponent
