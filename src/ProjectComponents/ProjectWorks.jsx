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
  margin-left:0;

}

`

const ProjectContent= styled.p`
display: flex;
flex-direction:column;
margin-left: 100px;
padding-top: 100px;
padding-left: 50px;
padding-right: 50px;
@media only screen and (max-width:768px){
  flex-direction:column;
  width:100%;
  margin: 0;
  padding:0;

  
}


`

const ProjectImage= styled.img`

max-width:700px;

@media only screen and (max-width:768px){
  margin:0;
height:100vh;
object-fit: cover;

}
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
@media only screen and (max-width:768px){
  margin-top:0;
}
`
const ProjectAbout = styled.p`
  
  @media only screen and (max-width:768px){
    text-align:left;
    width:100%;
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
