import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Navbar from "./Navbarcomponents/Index";
import "./index.css";

function App() {
  return (
    <div className="App">
        <Router >
          <Navbar/>
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
