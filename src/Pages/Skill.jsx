import React from 'react'

const SKilltitle = styled.h2`
display:flex;
flex-direction:row;
text-align:center;
font-family: 'Open Sans', sans-serif;
margin-top:30px;
@media only screen and (max-width: 768px){
   text-align: center;
   justify-content:center;
}

 
`
const Skillcontent= styled.div`
text-align:center;
font-family: 'Open Sans', sans-serif;
margin-top:30px;
`
const SkillInfo = styled.div`
 display: flex;
 flex-direction:column;
 margin-right:200px;
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