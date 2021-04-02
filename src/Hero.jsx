import React from "react";
import {Link} from "react-router-dom";
import med from "../src/medic1.svg";

const Hero=()=>{
    return (
        <>
            <div className="hero container">
            <div className="left">
            <img src={med} className="hero-img"></img>

            </div>
            <div className="right">
            <h1 className="welcome-text">Knockout Your dental worries with <span className="brand-name"> Life Care Hospital. </span></h1>
            <p className="long-text">When it comes to oral healthcare, Life Care Hospital is a name you can count on. 
            Since inception, we have been striving to offer excellent dental care solutions and treatments to our patients. 
            We are a hi-tech, modern dental care clinic rendering a range of oral healthcare services. 
            </p>
            <button className="btn call-btn"><i class="fas fa-phone-volume"></i> &nbsp;Call Us</button>

            </div>
        </div>
        </>
    )
}

export default Hero;