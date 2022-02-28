import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectWork = styled.div`
width:50%;
background-color: black;
border-radius:15px;
margin-left: auto;
margin-right:auto;
margin-top: 30px;

`

const ProjectContent= styled.div` 

word-wrap: break-word;

`

const ProjectImage= styled.img`
width:100%;
object-fit:contain;
border-radius: 10px 10px 0  0;
`
const ProjectButton = styled.button`
margin-top:30px;
margin-bottom:0;
height: 50px;
width:100%;
font-size: 1rem;
color: white;
border-radius:0 0 15px 15px;
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
 
  padding-right:50px;
 word-wrap: break-word;
 background-color:black;
 color:white;
  @media only screen and (max-width:768px){
    flex-direction:column;
    font-size:9px;
    
  
  }
`
const ProjectLink = styled.a`
color: black;
margin:0;
 
`
function ProjectWorks(props){
  return (
       <ProjectWork>
           <ProjectLink href =  {`${props.link}`}>
              <ProjectImage src = {props.img}/>
              <ProjectContent>
                 <ProjectAbout>{props.about}</ProjectAbout>
                 <ProjectButton >{props.buttoncontent}</ProjectButton>
              </ProjectContent>
              </ProjectLink>
          </ProjectWork>
    
  );
}

export default ProjectWorks;
