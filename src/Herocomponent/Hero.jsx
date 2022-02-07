import React,{ useEffect } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";


const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
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
const HeroSlide = styled.div`
z-index:1;
width:100%;
height:100%;

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
const HeroTitle = styled.div`
     margin-bottom: 50px;
     font-size:clamp(1rem,8vw,2rem);
     text-align:center;
     justify-content: center;
@media only screen and (max-width:768px){
    text align: center;
    justify-content: center;
}

`

function Hero() {
    const [state] = useEffect({
        title: "Hi",
        titleTwo: "I'm",
        titleThree: "Sulaimon" 
    })
    return (
        <HeroSection>
            <Herowrapper>
                <HeroImage src = "/Images/background.jpeg" alt = "my image"/>
                 <HeroContent>
                     <HeroTitle>
                         <h1>{state.title}</h1>
                         <h1>{state.titleTwo}</h1>
                         <h1>{state.titleThree}</h1>
                     </HeroTitle>
                </HeroContent>  
                </Herowrapper>    
         </HeroSection>
    )
}

export default Hero;
