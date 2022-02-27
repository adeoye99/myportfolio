import React from 'react';
import Navbar from "../Navbarcomponents/Index";
import styled from "styled-components"

const Aboutcontainer = styled.div`
height: 100vh;
max-height: 1300px;

color: black;
background-color:white;

@media screen and (max-width: 768px){
   height:100vh;
   max-height: 1300px;
   display:flex;
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
  
   @media only screen and (max-width: 768px){
     width:100%;
   
   }
`
const Aboutcontent = styled.div`
text-align:center;
justify-content:center;
   margin-left:600px;
   margin-right:200px;
   font-size: 1rem;
   font-family: 'Open Sans', sans-serif;
   margin-top:200px;
   padding-left:100px;
   padding-right:100px;
   @media only screen and (max-width: 768px){
      width:100%;
      padding:0;
      margin:0;
   
   }

`

const Aboutimage = styled.img`
width:250px;
height:250px;
border-radius:50%;
@media screen and(max-width:768px){
   
   

}
`
const Imagecontainer =styled.div`
   float:left;
   justify-content:center;
   margin-left:100px;
   margin-top:150px;

   @media only screen and (max-width:768px){
      width:100%;
      margin-top:0;
      padding-top:30px;
      text-align:center;
      margin-left:0;

   }


`



function About() {
  return( <Aboutcontainer id ="about">
                  <Imagecontainer>
                  <Aboutimage src = "/Images/sulaimon.jpg"/>
                  </Imagecontainer>
                  
                   <Aboutcontent>Hello! My Name is Adeoye Sulaimon Kolawole I am a frontend developer i enjoy creating user interfaces i ave worked on projects like streaming site,an  ecommerce web app, Spacestargram(using the NASA api),weather read i try to always learn new things everyday  </Aboutcontent>

             
    </Aboutcontainer>
  )
}

export default About;
