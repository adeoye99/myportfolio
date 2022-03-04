import React from 'react';
import styled from "styled-components"

const Aboutcontainer = styled.div`
height: 100vh;
max-height: 1300px;
color: black;
background-color:white;


@media screen and (max-width: 768px){
   width:100%;
   


}

`
const Abouttitle = styled.h2`
   text-align: center;
   font-family: 'Open Sans', sans-serif;
   margin-top:20px;
   @media screen and (max-width:768px){
      margin-top:50px;
   }

`
const AboutInfo = styled.div`

   margin-top: 80px;
   @media only screen and (max-width:1440px){
   }
   @media only screen and (width:768px){
      width:60%;
      margin-left:auto;
      margin-right:auto;
      margin-top:10px;

   }
  
   @media only screen and (max-width: 425px){
      margin-top:0px;
   
   
   }
`
const Aboutcontent = styled.div`
    text-align:center;
   font-size: 1rem;
   font-family: 'Open Sans', sans-serif;
   padding-top:100px;
   padding-left:100px;
   padding-right:100px;

   @media only screen and (max-width: 768px){
      width:80%;
      padding:0;
      margin-left:auto;
      margin-right:auto;
      padding-top:320px;
      margin-top:80px;
   }

`

const Aboutimage = styled.img`
text-align:center;
max-width: 50%;
height:auto;
border-radius:50%;
@media only screen and (max-width: 1024px){
    margin:0;
}
@media screen and(max-width:768px){
   width:50%;
  
}
`
const Imagecontainer =styled.div`
    float:left;
    text-align:center;
   @media only screen and (max-width: 1024px){
      width:50%;
   }
   @media only screen and (width: 768px){
      float:left;
      width:50%;
   }

   @media screen and (max-width:768px){
      width:100%;
      margin-top:10px;
      padding-top:0px;
      text-align:center;
     
      margin-bottom:10px;

   }


`



function About() {
  return( <Aboutcontainer  id ="about">
                  <Abouttitle>About Me</Abouttitle>
                  <AboutInfo>
                     <Imagecontainer data-aos ="fade-right">
                     <Aboutimage src = "/Images/sulaimon.jpg"/>

                     </Imagecontainer>
                        <Aboutcontent data-aos ="fade-left">Hello! My Name is Adeoye Sulaimon Kolawole I am a frontend developer i enjoy creating user interfaces i ave worked on projects like a streaming site,an  ecommerce web app, Spacestargram(using the NASA api)My goal is continous self development </Aboutcontent>
                  </AboutInfo>
             
    </Aboutcontainer>
  )
}

export default About;
