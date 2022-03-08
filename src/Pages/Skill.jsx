import React from 'react'
import styled from "styled-components"
import "./Skill.css"
const SkillWrapper = styled.div`
height: 100vh;
max-height: 1300px;

 color:white;
 background-color:black;

 padding-bottom:50px;
 @media only screen and (max-width: 768px){
   width: 100%;
 }
 
 `
const SKilltitle = styled.h2`
margin-top:28px;
text-align:center;

font-family: 'Open Sans', sans-serif;

@media only screen and (max-width: 768px){
  margin-top:40px;
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
display:flex;
flex-direction:row;
margin-top:180px;
padding:auto;
@media only screen and (max-width:768px){
  margin-top:0;
  margin-left:auto;
  margin-right:auto;
  flex-direction:column;
}
 
 `

function Skill() {
  return (
    <SkillWrapper id ="skills">
      <SKilltitle>My Skills</SKilltitle>
        <SkillInfo  >
           <i data-aos="fade-down-right" class="devicon-javascript-plain colored"></i>
           <i data-aos="fade-down-right" class="devicon-css3-plain-wordmark colored"></i>
           <i data-aos="fade-down-right" class="devicon-react-original-wordmark colored"></i>
           <i data-aos="fade-down-right" class="devicon-html5-plain-wordmark colored"></i>
           <i  data-aos="fade-down-right" class="devicon-bootstrap-plain-wordmark colored"></i>
        </SkillInfo>
     </SkillWrapper>
  )
}

export default Skill