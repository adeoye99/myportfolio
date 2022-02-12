import React from 'react';
import styled from "styled-components";

const ProjectWork = styled.div`
width:50%;
background-color: white;
margin-left: auto;
margin-right:auto;
margin-top: 30px;
border-radius:  10px;
box-shadow: 10px 10px 10px 10px #ccc ;

`

const ProjectContent= styled.div`



`

const ProjectImage= styled.img`
width:100%;
border-radius: 10px 10px 0  0;

`
const ProjectButton = styled.button`
margin-top:20px;
height: 50px;
font-size: 1rem;
color: white;
background-color: black;
&:hover{
  background-color: black;
}
@media only screen and (max-width:768px){
  margin-top:0;
}
`
const ProjectAbout = styled.div`
 display: flex;
 flex-direction:column:
  @media only screen and (max-width:768px){
    flex-direction:column;
    
  
  }
`
function ProjectWorks(props){
  return (
    
       <ProjectWork>
              <ProjectImage src = {props.img}/>
              <ProjectContent>
                 <ProjectAbout>{props.about}</ProjectAbout>
                  <ProjectButton>{props.buttoncontent}</ProjectButton>
              </ProjectContent>
          </ProjectWork>
    
  );
}

export default ProjectWorks;
