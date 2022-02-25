import React from 'react';
import Navbar from "../Navbarcomponents/Index";
import styled from "styled-components"

const Aboutcontainer = styled.div`
display:flex;
flex-direction:row;
color: black;
text-align:left;
background-color:white;
@media screen and (max-width: 768px){

    flex-direction: column;
}

`
const Abouttitle = styled.h2`
   text-align: center;
   font-family: 'Open Sans', sans-serif;
   margin-top:30px;

`
const AboutInfo = styled.div`
   display:flex;
   flex-direction:column;
   margin-right: 50px;
   text-align:center;
   @media only screen and (max-width: 768px){
     width:100%;
   
   }
`
const Aboutcontent = styled.div`
   text-align:center;
   margin-top: 20px;
   font-size: 1rem;
   font-family: 'Open Sans', sans-serif;
   padding-left: 200px;
   padding-right: 200px;
   @media only screen and (max-width: 768px){
        width:100%;
       padding-left:5px;
       padding-right:0px;
      
   
   }

`
const SKilltitle = styled.h2`
display:flex;
flex-direction:row;
text-align:center;
font-family: 'Open Sans', sans-serif;
margin-top:30px;
@media only screen and (max-width: 768px){
   text-align: center;
   justify-content:center;
}

 
`
const Skillcontent= styled.div`
text-align:center;
font-family: 'Open Sans', sans-serif;
margin-top:30px;
`
const SkillInfo = styled.div`
 display: flex;
 flex-direction:column;
 margin-right:200px;
 @media only screen and (max-width: 768px){
   width: 100%;
}
 
`
const Aboutimage = styled.img`
width:200px;
height:200px;
margin-left:auto;
margin-top:20px;
margin-right:auto;
border-radius:50%;
text-align:center;
`



function About() {
  return <Aboutcontainer className="about" id ="about">
    <AboutInfo>
       <Abouttitle>About Me</Abouttitle>
       <Aboutimage src = "/Images/sulaimon.jpg"/>
       <Aboutcontent>Hello! My Name is Adeoye Sulaimon Kolawole I am a frontend developer i enjoy creating user interfaces i ave worked on projects like streaming site,an  ecommerce web app, Spacestargram(using the NASA api),weather read i try to always learn new things everyday  </Aboutcontent>
    </AboutInfo>
    <SkillInfo>
      <SKilltitle>My Skills</SKilltitle>
      <Skillcontent>HTML</Skillcontent>
      <Skillcontent>CSS</Skillcontent>
      <Skillcontent>JAVASCRIPT</Skillcontent>
      <Skillcontent>REACTJS</Skillcontent>
      <Skillcontent>BOOTSTRAP</Skillcontent>
    </SkillInfo>
    
    </Aboutcontainer>
}

export default About;
