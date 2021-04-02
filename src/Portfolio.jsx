import React from "react";
import propic from "../src/profile-pic.png";


const Portfolio=()=>{
    return(
        <>
        <section>
        
        <div className="section-container">
            <div className="port-left">
                <img src={propic} className="pro-img" alt="Profile Pic"></img>
            </div>
            <div className="port-right">
                <h2>Dr. Nikhil Chaubey</h2>
                <h4>MDS(Persuing) , BDS</h4>
                <h5>Dental College,Vananchal,Garhwa</h5>
                <h4>Dental Surgeon @</h4>
                <p>Life Care Hospital, Station Road, Rehla, Palamau, Jharkhand, 822124</p>
                
                <p><i className="fab fa-linkedin"></i><i className="fab fa-twitter-square"></i><i class="fas fa-envelope"></i><i class="fas fa-map-marker"></i></p>

            </div>
        </div>
    </section>
        </>
    )
}
export default Portfolio;