import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectWork = styled.div`
width:50%;
background-color: white;
margin-left: auto;
margin-right:auto;
margin-top: 30px;
border-radius:  10px;

`

const ProjectContent= styled.div` 

word-wrap: break-word;

`

const ProjectImage= styled.img`
width:100%;
border-radius: 10px 10px 0  0;
`
const ProjectButton = styled.button`
margin-top:20px;
height: 50px;
width:100%;
font-size: 1rem;
color: white;
background-color: black;
&:hover{
  background-color: grey;
}
@media only screen and (max-width:768px){
  margin-top:0;
}
`
const ProjectAbout = styled.div`
 display: flex;
 flex-direction:column:
 word-wrap: break-word;
  @media only screen and (max-width:768px){
    flex-direction:column;
    
  
  }
`
function ProjectWorks(props){
  return (
       <ProjectWork>
           <a href =  {`${props.link}`}>
              <ProjectImage src = {props.img}/>
              <ProjectContent>
                 <ProjectAbout>{props.about}</ProjectAbout>
                 <ProjectButton >{props.buttoncontent}</ProjectButton>
              </ProjectContent>
              </a>
          </ProjectWork>
    
  );
}

export default ProjectWorks;
