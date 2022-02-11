import React from 'react';
import styled from "styled-components";

const ProjectWork= styled.div`
display:flex;
flex-direction:row;
text-align:center;
margin-top:60px;



`

const ProjectContent= styled.p`
display: flex;
flex-direction:column;
margin-left: 100px;

`

const ProjectImage= styled.img`
float:left;
width:200px;




`
const ProjectButton = styled.button`


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
