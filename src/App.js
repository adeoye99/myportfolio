
import About from './Pages/About';
import Home from './Pages/Home';
import React,{ useState } from "react";
import Projects from './Pages/Projects';
import Navbar from "./Navbarcomponents/Index";
import {BrowserRouter as Router} from "react-router-dom"
import Contact from './Pages/Contact';
import { FooterContainer }from './Container/Footer';
import "./index.css";
import Skill from "./Pages/Skill"
import Dropdown from "./Dropdowncomponent/Dropdown";



function App() {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <div className="App">
      <Router>
          <Navbar toggle = {toggle}/>
           <Dropdown isOpen = {isOpen} toggle ={toggle}/>
            <Home />
            <About />
            <Skill/>
            <Projects id = "projects"/>
            <Contact/>
            <FooterContainer/>
       </Router>
      </div>
  
  );
}

export default App;
