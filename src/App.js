import logo from './logo.svg';
import './App.css';
import Menu from "./Menu.jsx";
import Home from "./Home.jsx";
import Team from "./Team.jsx";
import Appointment from "./Appointment.jsx";
import Services from "./Services.jsx";
import Portfolio from "./Portfolio.jsx";
import Navbar from "./Navbar.jsx";
import Tips from "./Tips.jsx";
import {Switch, Route, Redirect } from "react-router-dom";

const App=()=> {
  return (
    <>
    <Menu/>
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/portfolio' component={Portfolio} />
    <Route exact path='/appointment' component={Appointment} />
    <Route exact path='/team' component={Team} />
    <Route exact path='/services' component={Services} />
    </Switch>

       


    </>
    
  );
};

export default App;
