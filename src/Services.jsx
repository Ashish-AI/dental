import React from "react";
import im1 from "../src/tour-images/1.jpg";
import im2 from "../src/tour-images/2.jpg";
import im3 from "../src/tour-images/3.jpg";
import im4 from "../src/tour-images/4.jpg";
import im5 from "../src/tour-images/5.jpg";
import im6 from "../src/tour-images/6.jpg";
import im7 from "../src/tour-images/7.jpg";
import im8 from "../src/tour-images/8.jpg";
import im9 from "../src/tour-images/9.jpg";
import im10 from "../src/tour-images/10.jpg";
import im11 from "../src/tour-images/11.jpg";
import im12 from "../src/tour-images/12.jpg";
import im13 from "../src/tour-images/13.jpg";
import im14 from "../src/tour-images/14.jpg";
import im15 from "../src/tour-images/15.jpg";

const Services=()=>{
    return(
        <>
        <div className="services-container">
                    <div className="container-team">
                        <h1>SERVICES</h1>
                        <p>We Believe in providing best services using mordern techniques. </p>

                    </div>
            <div className="row">
                <div className="card serv-card col-lg-4">
                <img className="card-img-top" src={im6} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Clear Aligners</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div className="card col-lg-4">
                <img className="card-img-top" src={im2} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Dental Filling</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div className="card col-lg-4">
                <img className="card-img-top" src={im9} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Root Canal Treatment</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                </div>

                <div className="row">
                <div className="card col-lg-4">
                <img className="card-img-top" src={im12} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Wisdom Teeth Removal</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div className="card col-lg-4">
                <img className="card-img-top" src={im7} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Dental Implants</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                <div className="card col-lg-4">
                <img className="card-img-top" src={im6} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Teeth Whitening</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                </div>
                </div>
               
                </div>
   
        </>
    )
}
export default Services;