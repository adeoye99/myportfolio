import React from 'react';
import styled from "styled-components";

const ProjectWork= styled.div`


`

const ProjectContent= styled.p`

`

const ProjectImage= styled.img`
float: left;



`
const ProjectButton = styled.button`

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
