import React,{ useEffect } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect"

const HeroSection = styled.section  `
height: 100vh;
background-color:grey;
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

const HeroSlider= styled.div`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;

&:before{
    content: '';
    position: absolute;
    z-index:2;
    width:100%;
    height:100vh;
    bottom: 0vh;
    left:0;
    overflow:hidden;
    opacity : 0.4;
    background: linear-gradient(
        0deg,
        rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.2) 50%,
        rgba(0,0,0,0.6) 100%,
    )
}
`
const HeroImage = styled.img`
position:absolute;
top:0;
left:0;
width:100vw;
height:100vh;
object-fit: cover;
`

const HeroContent = styled.div`
position:absolute;
top:200px;
z-index: 10;
max-width:1600px;
width:calc(100% - 100px);
color:white;
justify-content: center;
text-align: center;
h1{
    text-align:center;
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

`
const HeroTitle = styled.div`
     margin-bottom: 50px;
     font-size:clamp(1rem,8vw,2rem);
     text-align:center;
     justify-content: center;
@media only screen and (max-width:768px){
    text-align: center;
    justify-content: center;
}`
const Button = styled.button`
padding:20px;
margin-top: 50px;
width:100px;
border-radius:5px;
border: none;
@media only screen and (max-width:768px){
    text-align:center;
    justify-center:center;
    margin-bottom:100px;
    margin-top:00px;
}

`


function Hero() {
        return (
        <HeroSection>
             <Herowrapper>
                 <HeroContent>
                     <HeroTitle>
                         <h1>FRONT-END DEVELOPER</h1>
                    </HeroTitle>
                    <Typewritereffect>
                         <Typewriter
                          options= {{
    
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
