import React from 'react';
import styled from "styled-components";
import Projectdatas from '../Data/Projectdata';
import ProjectWorks from '../ProjectComponents/ProjectWorks';

const ProjectContainer = styled.div`
text-align:center;
margin-bottom:500px;

`
const Projecttitle = styled.h2`
    text-align:center;
    margin-top:20px;
    font-family: 'Open Sans', sans-serif;
    
`

function Projects(Projectdata) {
  function CreateProject(Projectdata){
    return(
    <ProjectWorks
      img = {Projectdata.img}
      about = {Projectdata.about}
      buttoncontent = {Projectdata.buttoncontent}
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
