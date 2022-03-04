import React from 'react'
import styled from "styled-components";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect"

const HeroSection = styled.section  `
height: 100vh;
background-color:black;
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

@media screen and (max-width:768px){
    top:150px;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction:column;
}
@media only screen and (width:320px){

}
`
const Typewritereffect = styled.h1`

margin-top:50px;
@media screen and (width:768px){
    width:100%;
    margin-bottom:0px;
}

`
const HeroTitle = styled.h1`
     font-family: 'Montserrat',sans-serif;
     font-size:clamp(1rem,8vw,3rem);
     text-align:left;
     justify-content:left;
@media only screen and (max-width:768px){
    margin-left:auto;
    margin-right:auto;
    text-align: center;
    justify-content: center;
}`
const Buttoncontainer = styled(Link)`
margin-top:250px;
margin-right:1050px;
@media only screen and (width:1024px){
   align-items:left;
   margin-left:300px;
   margin-top:300px;
}
@media screen and (max-width:768px){
    margin:0;
}


`
const Button = styled.button `
padding:20px;
width:150px;
border-radius:5px;
align-items:left;
justify-content:left;
border: none;

@media only screen and (max-width:768px){
    left:20px;
    margin-top:300px;
    
}

`


function Hero() {
        return (
        <HeroSection id ="/">
             <Herowrapper>
                 <HeroContent>
                     <HeroTitle>ADEOYE SULAIMON KOLAWOLE</HeroTitle>
                    <Typewritereffect>
                         <Typewriter
                          options= {{
                              autoStart:true,
                              loop: true,    
                              strings:[
                                  "Hello My Name is Adeoye Sulaimon",
                                  "I'm a Web Developer",
                                  "I'm a Tech Enthusiast"
                              ],
                          }}
                         />
                    </Typewritereffect>
                </HeroContent>
                <Buttoncontainer to="contact" spy={true} smooth={true} offset={-10} duration={500}> 
                        <Button>CONTACT ME</Button>
                </Buttoncontainer>
              
               </Herowrapper>
         </HeroSection>
    )
}

export default Hero;
