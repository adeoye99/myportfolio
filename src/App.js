import {Route, Routes, Router} from "react-router-dom";
import About from './Pages/About';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Index from "./Navbarcomponents/Index";

function App() {
  return (
    <div className="App">
        <Router >
          <Index/>
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
