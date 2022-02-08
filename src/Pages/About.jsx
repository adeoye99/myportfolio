import React from 'react';
import styled from "styled-components"

const Aboutcontainer = styled.div`
color: white;
text-align:left;
background-color:black;
padding-top:100px;



`
const Abouttitle = styled.h1`
   text-align: center;

`
const Aboutcontent = styled.p`
   text-align: center;
   margin-top: 50px;
   font-size: 1.5rem;

`


function About() {
  return <Aboutcontainer className="about">
    <Abouttitle>About Me</Abouttitle>
    <Aboutcontent>  A frontend developer</Aboutcontent>
  </Aboutcontainer>
}

export default About;
