import React from "react";

const Appointment=()=>{
    return(
        <>
         <div className="form-container">
         <div className="container-team">
                        <h1>BOOK A CALL</h1>
                        <p>We promise to provide assistance as soon as possible.</p>

                    </div>  
                    <form class="row g-3 needs-validation" novalidate>
            <div class="col-md-6 position-relative">
                <label for="validationTooltip01" class="form-label">First name</label>
                <input type="text" class="form-control" id="validationTooltip01" placeholder="Enter Your First Name" required />
                <div class="valid-tooltip">
                Looks good!
                </div>
            </div>
            <div class="col-md-6 position-relative">
                <label for="validationTooltip02" class="form-label">Last name</label>
                <input type="text" class="form-control" id="validationTooltip02" placeholder="Enter Your Last Name"  required />
                <div class="valid-tooltip">
                Looks good!
                </div>
            </div>
            
            <div class="col-md-6 position-relative">
                <label for="validationTooltip03" class="form-label">City/Town/Village</label>
                <input type="text" class="form-control" id="validationTooltip03" placeholder="Place you belong to" required />
                <div class="invalid-tooltip">
                Please provide a valid city.
                </div>
            </div>
           
            <div class="col-md-3 position-relative">
                <label for="validationTooltip05" class="form-label">Mobile Number</label>
                <input type="number" class="form-control" id="validationTooltip04" placeholder="10 Digit Mobile Number" required />
                <div class="invalid-tooltip">
                Please provide a Mobile Number.
                </div>
            </div>
            <div class="col-md-3 position-relative">
                <label for="validationTooltip05" class="form-label">Date</label>
                <input type="date" class="form-control" id="validationTooltip05" placeholder="Date you want to visit us" required />
                <div class="invalid-tooltip">
                Please provide a Mobile Number.
                </div>
            </div>
            <div class="col-12 btn1 ">
                <center><button class="btn btn-primary " type="submit">Get a Callback</button></center>
            </div>
            </form>
            
        </div>
        
        </>
    )
}
export default Appointment;