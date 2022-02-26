import React from 'react';
import Navbar from "../Navbarcomponents/Index";
import styled from "styled-components";
import Projectdatas from '../Data/Projectdata';
import ProjectWorks from '../ProjectComponents/ProjectWorks';

const ProjectContainer = styled.div`
text-align:center;
margin-bottom:00px;

`
const Projecttitle = styled.h2`
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
        <ProjectContainer id ={props.id}>
          <Projecttitle>MY PROJECTS</Projecttitle>
          {Projectdatas.map(CreateProject)}
        </ProjectContainer>
          
  );
}

export default Projects;
