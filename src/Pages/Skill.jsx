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
 color:white;
 background-color:black;
 justify-content:center;
 text-align:center;
 padding-bottom:50px;
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