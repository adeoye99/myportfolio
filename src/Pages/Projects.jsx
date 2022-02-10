import React from 'react';
import styled from "styled-components";
import Projectdatas from '../Data/Projectdata';
import ProjectWorks from '../ProjectComponents/ProjectWorks';

const ProjectContainer = styled.div`
text-align:center;

`
const Projecttitle = styled.h2`
    text-align:center;
    margin-top:20px;
    

`

function Projects(Projectdata) {
  function CreateProject(Projectdata){
    return(
    <ProjectWorks
      img = {Projectdata.img}
      about = {Projectdata.about}
    />
    )
  }
  return (
        <ProjectContainer>
          <Projecttitle>MY PROJECTS</Projecttitle>
          {Projectdatas.map(CreateProject)}
         
        </ProjectContainer>
          
  );
}

export default Projects;
