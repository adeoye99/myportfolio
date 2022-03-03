import React from 'react';
import styled from "styled-components";
import Projectdatas from '../Data/Projectdata';
import ProjectWorks from '../ProjectComponents/ProjectWorks';
import 'aos/dist/aos.css';

const ProjectContainer = styled.div`
text-align:center;
margin-bottom:00px;

`
const Projecttitle = styled.h2`
    text-align:center;
    margin-top:20px;
    font-family: 'Open Sans', sans-serif;
    
`
const Projectclick = styled.h4`
    text-align:center;
    margin-top:20px;
    font-family: 'Open Sans', sans-serif;
    
`

function Projects(props) {
  
  function CreateProject(Projectdata){
     
    return(
    <ProjectWorks
      key = {Projectdata.id}
      img = {Projectdata.img}
      about = {Projectdata.about}
      buttoncontent = {Projectdata.buttoncontent}
      link = {Projectdata.link}
    />
    );
  }
  return (
        <ProjectContainer id = "projects">
          <Projecttitle>MY PROJECTS</Projecttitle>
          <Projectclick>Click to view projects</Projectclick>
          {Projectdatas.map(CreateProject)}
        </ProjectContainer>
          
  );
}

export default Projects;
