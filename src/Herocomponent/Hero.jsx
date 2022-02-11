import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect"

const HeroSection = styled.section  `
height: 100vh;
background-color:grey;
background-image: url("https://www.transparenttextures.com/patterns/brick-wall.png");
max-height: 1300px;
position:relative;
overflow:hidden;
display:flex;
@media only screen and (max-width:768px){
    
}
`

const Herowrapper = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
overflow:hidden;
position:relative;
`



const HeroContent = styled.div`
position:absolute;
top:200px;
z-index: 10;
max-width:1600px;
width:calc(100% - 100px);
color:white;
justify-content: center;
text-align: left;
h1{
    text-align:left;
    color: white;

}

@media screen and (max-width:425px){
    position:relative;
    top:20px;
    right:20%;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction:column;
    h1{
        margin-left:30px;
        justify-content:center;
        text-align:center;
    }
    
    @media only screen and (width:320px){
    
        right:109px;
        h1{
            margin-left:100px;
        }

    }

}
`
const Typewritereffect = styled.h1`
margin-top:50px;

`
const HeroTitle = styled.h1`
     font-family: 'Montserrat',sans-serif;
     font-size:clamp(1rem,8vw,3rem);
     text-align:center;
     justify-content: center;
@media only screen and (max-width:768px){
    margin-left:auto;
    margin-right:auto;
    text-align: center;
    justify-content: center;
}`
const Button = styled.button `
padding:20px;
margin-top: 50px;
width:150px;
border-radius:5px;
border: none;
@media only screen and (max-width:428px){
    text-align:center;
    justify-center:center;
    margin-left:auto;
    

    
}

`


function Hero() {
        return (
        <HeroSection>
             <Herowrapper>
                 <HeroContent>
                     <HeroTitle>FRONT-END DEVELOPER</HeroTitle>
                    <Typewritereffect>
                         <Typewriter
                          options= {{
                              autoStart:true,
                              loop: true,    
                              strings:[
                                  "My Name is Adeoye Sulaimon",
                                  "I'm a Web Developer",
                                  "I'm a Tech Enthusiast"
                              ],
                          }}
                         />
                    </Typewritereffect>
                    <Button>CONTACT ME</Button>
                </HeroContent>  
               </Herowrapper>
         </HeroSection>
    )
}

export default Hero;
