import React from 'react';
import styled from "styled-components"

const Aboutcontainer = styled.div`
height: 100vh;
max-height: 1300px;
color: black;
background-color:white;


@media screen and (max-width: 768px){
   height:100vh;
   max-height: 1300px;
   width:100%;
   


}

`
const Abouttitle = styled.h2`
   text-align: center;
   font-family: 'Open Sans', sans-serif;
   margin-top:20px;
   @media screen and (max-width:768px){
      margin-top:20px;
   }

`
const AboutInfo = styled.div`

   margin-top: 150px;
   @media only screen and (max-width:1440px){
      margin-top:0;
   }
   @media only screen and (width:768px){
      width:60%;
      margin-left:auto;
      margin-right:auto;
      margin-top:40px;

   }
  
   @media only screen and (max-width: 768px){
     margin-top:10px;
        
   
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
   
      
   
   
   
   }

`

const Aboutimage = styled.img`
max-width: 50%;
height:auto;
border-radius:50%;
@media only screen and (max-width: 1024px){
    margin:0;
}
@media screen and(max-width:768px){
   width:25%;
   
   

}
`
const Imagecontainer =styled.div`
   float:left;
   justify-content:center;
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
      margin-top:0;
      padding-top:0px;
      text-align:center;
      margin-left:0;
      margin-bottom:50px;

   }


`



function About() {
  return( <Aboutcontainer  id ="about">
                  <Abouttitle>About Me</Abouttitle>
                  <AboutInfo>
                       <Imagecontainer>
                        <Aboutimage data-aos ="fade-right"src = "/Images/sulaimon.jpg"/>
                        </Imagecontainer>
                        <Aboutcontent data-aos ="fade-left">Hello! My Name is Adeoye Sulaimon Kolawole I am a frontend developer i enjoy creating user interfaces i ave worked on projects like streaming site,an  ecommerce web app, Spacestargram(using the NASA api),weather read i try to always learn new things everyday  </Aboutcontent>
                  </AboutInfo>
             
    </Aboutcontainer>
  )
}

export default About;
