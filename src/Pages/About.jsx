import React from 'react';
import styled from "styled-components"

const Aboutcontainer = styled.div`
display:flex;
flex-direction:row;
color: black;
text-align:left;
background-color:white;
@media only screen and (max-width: 768px){
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
   @media screen and (max-width: 768px){
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
        padding:0;
   }

`
const SKilltitle = styled.h2`
display:flex;
flex-direction:row;
text-align:center;
font-family: 'Open Sans', sans-serif;
margin-top:30px;

 
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



function About() {
  return <Aboutcontainer className="about">
    <AboutInfo>
       <Abouttitle>About Me</Abouttitle>
       <Aboutcontent>Hi My Name is Adeoye Sulaimon Kolawole I am a frontend developer i have coding for up to 6-7 months i ave worked on worked on projects like streaming,an  ecommerce web app, Spacestargram(using the NASA api),weather read</Aboutcontent>
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
