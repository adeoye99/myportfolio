
import About from './Pages/About';
import Home from './Pages/Home';
import React,{ useEffect, useState } from "react";
import Projects from './Pages/Projects';
import Navbar from "./Navbarcomponents/Index";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import { FooterContainer }from './Container/Footer';
import "./index.css";
import Skill from "./Pages/Skill"
import Dropdown from "./Dropdowncomponent/Dropdown";
import Aos from "aos";
import 'aos/dist/aos.css';

function Resume (){
  return(
    <Router>
      <Routes>
        <Route path ="/resume" element = {<Resume/>}/>

      </Routes>
    </Router>
  )
} 



function App() {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="App">

      <Router>
          <Navbar toggle = {toggle}/>
           <Dropdown isOpen = {isOpen} toggle ={toggle}/>
            <Home />
            <About />
            <Skill/>
            <Projects/>
            <Contact/>
            <FooterContainer/>
            <Routes>
              <Route path ="/resume" element = {<Resume/>}/>
            </Routes>
       </Router>
      </div>
  
  );
}

export default App;
