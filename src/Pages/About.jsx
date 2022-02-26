import React from 'react';
import Navbar from "../Navbarcomponents/Index";
import styled from "styled-components"

const Aboutcontainer = styled.div`
height: 100vh;
max-height: 1300px;
padding-top:auto;
padding-bottom:auto;
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

const Aboutimage = styled.img`
width:200px;
height:200px;
margin-top:20px;
border-radius:50%;
text-align:center;
float:left;
`



function About() {
  return( <Aboutcontainer id ="about">
              <AboutInfo>
                   <Aboutimage src = "/Images/sulaimon.jpg"/>
                   <Aboutcontent>Hello! My Name is Adeoye Sulaimon Kolawole I am a frontend developer i enjoy creating user interfaces i ave worked on projects like streaming site,an  ecommerce web app, Spacestargram(using the NASA api),weather read i try to always learn new things everyday  </Aboutcontent>
               </AboutInfo>
             
    </Aboutcontainer>
  )
}

export default About;
