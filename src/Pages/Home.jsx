import React from 'react';
import Hero from "../Herocomponent/Hero"
import About from "./About"
import { FooterContainer } from "../Container/Footer"
import Projects from './Projects';

function Home() {
  return <div>
      <Hero/>
      <About/>
      <Projects/>
      
      <FooterContainer/>
      
  </div>;
}

export default Home;
