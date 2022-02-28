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
 display: flex;
 flex-direction:column;
border-top: 2px solid black;
border-bottom: 2px solid black;
 justify-content:center;
 text-align:center;
 @media only screen and (max-width: 768px){
   width: 100%;
}
 
`

function Skill() {
  return (
    <SkillInfo>
        <SKilltitle>My Skills</SKilltitle>
         <Skillcontent>HTML</Skillcontent>
         <Skillcontent>CSS</Skillcontent>
         <Skillcontent>JAVASCRIPT</Skillcontent>
         <Skillcontent>REACTJS</Skillcontent>
         <Skillcontent>BOOTSTRAP</Skillcontent>
    </SkillInfo>
  )
}

export default Skill