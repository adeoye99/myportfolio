import React from 'react';
import styled from "styled-components"

const Aboutcontainer = styled.div`
color: black;
text-align:left;
background-color:white;
`
const Abouttitle = styled.h2`
   text-align: center;
   font-family: 'Open Sans', sans-serif;
   margin-top:30px;
`
const Aboutcontent = styled.p`
   text-align: left;
   margin-top: 20px;
   padding-left:50px;
   padding-right:50px;
   font-size: 1rem;
   font-family: 'Open Sans', sans-serif;

`
const SKilltitle = styled.h2`
text-align:center;
font-family: 'Open Sans', sans-serif;
margin-top:30px;

 
`
const SKillcontent = styled.p`
text-align:center;
font-family: 'Open Sans', sans-serif;
margin-top:30px;

 
`



function About() {
  return <Aboutcontainer className="about">
    <Abouttitle>About Me</Abouttitle>
    <Aboutcontent>Hi My Name is Adeoye Sulaimon Kolawole I am a frontend developer i have coding for up to 6-7 months i ave worked on worked on projects like streaming,an  ecommerce web app, Spacestargram(using the NASA api),weather read</Aboutcontent>
    <SKilltitle>My Skills</SKilltitle>
    
    </Aboutcontainer>
}

export default About;
