import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../../index";
import "./nav.css";
import {FaBars,FaTimes} from "react-icons/fa"
const Nav = () => {

  const [click,setClick] = useState(false);



  const handleClick =()=>{

    setClick(!click);
    console.log("clicked..")

  }



  return (
    <div className="paddings nav-header">
      <h2 className="logoText">Fatih</h2>

      <ul className={click ? "nav-ul active" : "nav-ul"}>
        <li>
          <Link to={"/home"}>Home</Link>
        </li>
        <li>
          {" "}
          <Link to={"/blog"}>Blog</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to={"/pricing"}>Pricing</Link>
        </li>
        <li>
          {" "}
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>
          {" "}
          <Link to={"/login"}>Login</Link>{" "}
        </li>
         <button>Sing Up</button>
      </ul>

      <div className="hamburger">
        {click  ? (<FaBars size={50} onClick={handleClick} style={{color: 'black'}} />) : ( <FaTimes size={50} onClick={handleClick}  style={{color: 'white'}} />)}
        
       
      </div>


    </div>
  );
};

export default Nav;
