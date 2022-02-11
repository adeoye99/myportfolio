import React from 'react';
import styled from "styled-components";

const ProjectWork = styled.div`
display:flex;
flex-direction:row;
text-align:center;
margin-top:60px;
margin-left:50px;
@media only screen and (max-width : 768px){
  flex-direction: column;
}

`

const ProjectContent= styled.p`
display: flex;
flex-direction:column;
margin-left: 100px;
padding-top: 100px;
padding-left: 50px;
padding-right: 50px;

`

const ProjectImage= styled.img`
float:left;
width:700px;
height:500px




`
const ProjectButton = styled.button`
margin-top:200px;
height: 50px;
font-size: 1rem;
color: white;
background-color: 
&:hover{
  background-color: black;
}
`
function ProjectWorks(props){
  return (
    
       <ProjectWork>
              <ProjectImage src = {props.img}/>
              <ProjectContent>
                 {props.about}
                  <ProjectButton>{props.buttoncontent}</ProjectButton>
              </ProjectContent>
          </ProjectWork>
    
  );
}

export default ProjectWorks;
