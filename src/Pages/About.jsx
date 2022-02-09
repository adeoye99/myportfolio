import React from 'react';
import styled from "styled-components"

const Aboutcontainer = styled.div`
color: black;
text-align:left;
background-color:white;
`
const Abouttitle = styled.h3`
   text-align: center;
   font-family: 'Open Sans', sans-serif;
   margin-top:30px;
`
const Aboutcontent = styled.p`
   text-align: center;
   margin-top: 40px;
   font-size: 1.5rem;

`


function About() {
  return <Aboutcontainer className="about">
    <Abouttitle>About Me</Abouttitle>
    <Aboutcontent>  A frontend developer</Aboutcontent>
  </Aboutcontainer>
}

export default About;
