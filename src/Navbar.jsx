import React from "react";
import Modeee from './images/night-mode.png';
import './App.css';
import Content from "./Content";
function Navbar(){
    return(
        <>
       <header>
        <div className="div1">
            <p><b>
                <span className="first">TECH</span>
                <span className="second">TEE</span>
                <span className="third">Solutions</span>
            </b></p>
        </div>
        <div className="div2">
            <input type="text" placeholder=" Search..." />
        </div>
        <div className="div3"><b>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services </a>
            <a href="#">Contact Us</a>
            <a href="#">Login</a>
            </b>
        </div>
        
        <div className="div4">
       <img src={Modeee} alt="img"  height="30px"/>
        </div>
       </header>
       <Content name="TECHTEE" />
      
        </>
    )
}
export default Navbar;