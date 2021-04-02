import React from "react";
import {Link,NavLink} from "react-router-dom";


const Home=()=>{
    return(
        <>
        <header className="container">
        <div className="inner-container">
               <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="">Life Care Hospital</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> 
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 menu-item">
        <li class="nav-item">
          <Link activeClassName="menu-active" exact to="/home" class="nav-link " aria-current="page" >Home</Link>
        </li>
        <li class="nav-item">
          <Link  exact to="/portfolio" class="nav-link " aria-current="page" >Portfolio</Link>
        </li>
        <li class="nav-item">
          <Link exact to="/team" class="nav-link" aria-current="page" >Team</Link>
        </li>
        <li class="nav-item">
          <Link exact to="/services" class="nav-link " aria-current="page">Services</Link>
        </li>
        <li class="nav-item">
          <Link exact to="/appointment" class="nav-link" aria-current="page">Book an appointment</Link>
        </li>
        <li class="nav-item appointment">
          <Link exact  class="nav-link" aria-current="page">+91 9876543210</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
 </div> 
 </header>
  </>
    )
}
export default Home;