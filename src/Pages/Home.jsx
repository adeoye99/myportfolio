import React from 'react';
import Hero from "../Herocomponent/Hero"
import About from "./About"
import Navbar from "../Navbarcomponents/Index";
import Contact from "./Contact"
import { FooterContainer } from "../Container/Footer"
import Projects from './Projects';

function Home() {
  return <div>
     <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <FooterContainer/>
  </div>;
}

export default Home;
