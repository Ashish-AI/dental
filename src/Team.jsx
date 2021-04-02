import React from "react";
import doc1 from "../src/doc1.jpg";
import doc2 from "../src/doc2.jpg";
const Team=()=>{
    return(
        <>
            <div className="container">
                    <div className="container-team">
                        <h1>OUR TEAM</h1>
                        <p>We Bring Experienced Team to Your Service </p>

                    </div>

            <div className="team row">
        <div className="card team-card col">
            <img src={doc1} class="card-img-top" alt="Dentist" />
            <div className="card-body">
                <h5 className="card-title">Dr ABC</h5>
                <ul>
                    <li>Qualification: MDS</li>
                    <li>Experience: 3years</li>
                    <li>Specialization: MNO</li>
                </ul>
            </div>
        </div>
        <div className="card team-card  col">
            <img src={doc2} class="card-img-top" alt="Dentist" />
            <div className="card-body">
                <h5 className="card-title">Dr XYZ</h5>
                <ul>
                    <li>Qualification: MDS</li>
                    <li>Experience: 3years</li>
                    <li>Specialization: MNO</li>
                </ul>
            </div>
            </div>
        <div className="card team-card col">
            <img src={doc1} class="card-img-top" alt="Dentist" />
            <div className="card-body">
                <h5 className="card-title">Dr PQR</h5>
                <ul>
                    <li>Qualification: MDS</li>
                    <li>Experience: 3years</li>
                    <li>Specialization: MNO</li>
                </ul>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Team;