import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import React,{ useState } from "react";
import Projects from './Pages/Projects';
import Navbar from "./Navbarcomponents/Index";
import "./index.css";
import Dropdown from "./Dropdowncomponent/Dropdown";


function App() {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <div className="App">
        <Router >
        <Navbar toggle = {toggle}/>
        <Dropdown isOpen = {isOpen} toggle ={toggle}/>
             <div>
                 <Routes>
                     <Route path = "/Home" element = {<Home/>}/>
                     <Route path = "/About" element = {<About/>}/>
                     <Route path = "/Projects" element = {<Projects/>}/>
                     <Route path = "/" element = {<Home/>}/>
                 </Routes>
             </div>
             
        </Router>

    </div>
  );
}

export default App;
