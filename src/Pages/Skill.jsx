import React from 'react'
import styled from "styled-components"
import "./Skill.css"

const SKilltitle = styled.h2`
display:flex;
flex-direction:row;
text-align:center;
justify-content:center;
font-family: 'Open Sans', sans-serif;
margin-top:30px;
@media only screen and (max-width: 768px){
   text-align: center;
   justify-content:center;
}

 
`
const Skillcontent= styled.i`
text-align:center;
justify-content:center;
font-size:2.5rem;

font-family: 'Open Sans', sans-serif;
margin-top:30px;
`
const SkillInfo = styled.div`
height: 100vh;
max-height: 1300px;
display: flex;
 flex-direction:row;
 color:white;
 background-color:black;
 justify-content:center;
 text-align:center;
 padding-bottom:50px;
 @media only screen and (max-width: 768px){
   width: 100%;
 }`

function Skill() {
  return (
    <Skill>
        <SkillInfo  id ="skills">
           <i data-aos="fade-down-right" class="devicon-javascript-plain colored"></i>
           <i data-aos="fade-down-right" class="devicon-css3-plain-wordmark colored"></i>
           <i data-aos="fade-down-right" class="devicon-react-original-wordmark colored"></i>
           <i data-aos="fade-down-right" class="devicon-html5-plain-wordmark colored"></i>
           <i  data-aos="fade-down-right" class="devicon-bootstrap-plain-wordmark colored"></i>
        </SkillInfo>
     </Skill>
  )
}

export default Skill