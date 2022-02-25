
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
        <Navbar toggle = {toggle}/>
        <Dropdown isOpen = {isOpen} toggle ={toggle}/>
        <Home/>
        <About/>
        <Projects/>
    </div>
  );
}

export default App;
