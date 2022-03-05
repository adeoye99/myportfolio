import React from 'react'
import styled from "styled-components"

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
const Skillcontent= styled.div`
text-align:center;
justify-content:center;

font-family: 'Open Sans', sans-serif;
margin-top:30px;
`
const SkillInfo = styled.div`
height: 100vh;
max-height: 1300px;
display: flex;
 flex-direction:column;
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
    <SkillInfo  id ="skills">
        <SKilltitle>My Skills</SKilltitle>
         <Skillcontent data-aos="fade-down-right">HTML5</Skillcontent>
         <Skillcontent data-aos="fade-down-right">CSS3</Skillcontent>
         <Skillcontent data-aos="fade-down-right">JAVASCRIPT</Skillcontent>
         <Skillcontent data-aos="fade-down-right">REACTJS</Skillcontent>
         <Skillcontent data-aos="fade-down-right">BOOTSTRAP</Skillcontent>
         <Skillcontent data-aos="fade-down-right">REDUX</Skillcontent>
    </SkillInfo>
  )
}

export default Skill