import React from "react";
import Menu from "./Menu.jsx";
// import Home from "./Navbar.jsx";
import Team from "./Team.jsx";
import Appointment from "./Appointment.jsx";
import Services from "./Services.jsx";
import Portfolio from "./Portfolio.jsx";
import Navbar from "./Navbar.jsx";
import Tips from "./Tips.jsx";
import Hero from "./Hero.jsx";


const Home=()=>{

    return (
            <>
            <Navbar/>
            <Hero/>
            <Portfolio/>
            <Team/>
            <Tips/>
            <Services/>
            <Appointment/>

            </>

    );

}

export default Home;