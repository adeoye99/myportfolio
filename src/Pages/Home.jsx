import React from 'react';
import Hero from "../Herocomponent/Hero"
import About from "./About"
import { FooterContainer } from "../Container/Footer"

function Home() {
  return <div>
      <Hero/>
      <About/>
      <FooterContainer/>
      
  </div>;
}

export default Home;
