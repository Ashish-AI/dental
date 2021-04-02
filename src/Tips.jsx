import React from "react";
import advice from "../src/advice.jpg";


const Tips=()=>{
    return(
        <>
        <div className="tips">
            <div className="tips-left">
                <div className="tips-text">
                <h1>Dentist speaks !!</h1>
                <p>Best practices suggested directly by Dentist</p>
                </div>
                
            
            </div>
            <div className="tips-right">
            {/* <div className="ul-list"> */}
            <ul >
                <li><i className="fas fa-hand-point-right"></i><h5>&nbsp;&nbsp;Don’t go to bed without brushing your teeth</h5></li>
                <li><i className="fas fa-hand-point-right"></i><h5>&nbsp;&nbsp;Brush properly</h5></li>
                <li><i className="fas fa-hand-point-right"></i><h5>&nbsp;&nbsp;Don’t neglect your tongue</h5></li>
                <li><i className="fas fa-hand-point-right"></i><h5>&nbsp;&nbsp;Use a fluoride toothpaste</h5></li>
                <li><i className="fas fa-hand-point-right"></i><h5>&nbsp;&nbsp;Treat flossing as important as brushing</h5></li>
                <li><i className="fas fa-hand-point-right"></i><h5>&nbsp;&nbsp;Consider mouthwash</h5></li>
                <li><i className="fas fa-hand-point-right"></i><h5>&nbsp;&nbsp;Drink more water</h5></li>
                <li><i className="fas fa-hand-point-right"></i><h5>&nbsp;&nbsp;Eat crunchy fruits and vegetables</h5></li>
                <li><i className="fas fa-hand-point-right"></i><h5>&nbsp;&nbsp;Limit sugary and acidic foods</h5></li>
                <li><i className="fas fa-hand-point-right"></i><h5>&nbsp;&nbsp;See your dentist at least twice a year</h5></li>
            </ul>
            {/* </div> */}
           
            </div>
        </div>
        </>
    );
}
export default Tips;