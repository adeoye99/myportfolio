import React from 'react';
import styled from "styled-components"

const Aboutcontainer = styled.div`
text-align: center
`

function About() {
  return <Aboutcontainer className="about">
    <h1>About Me</h1>
    <h1>Hi my name is Adeoye sulaiimon I am a frontend developer</h1>
  </Aboutcontainer>;
}

export default About;
