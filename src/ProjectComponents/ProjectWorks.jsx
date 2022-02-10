import React from 'react';
import styled from "styled-components";

const ProjectWork= styled.div`
display:flex;

text-align:center;



`

const ProjectContent= styled.p`
display: flex;

`

const ProjectImage= styled.img`
float: left;
display:flex;



`
const ProjectButton = styled.button`
width:50px;

`
function ProjectWorks(props){
  return (
    
       <ProjectWork>
              <ProjectImage src = {props.img}/>
              <ProjectContent>
                 {props.about}
                  <ProjectButton  />
              </ProjectContent>
          </ProjectWork>
    
  );
}

export default ProjectWorks;
