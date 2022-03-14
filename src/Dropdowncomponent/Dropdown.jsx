import React from "react";
import styled from "styled-components";
import menuData from "../Data/menuData";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"
import "./Dropdown.css"
const DropdownContainer = styled.div`
 position:fixed;
  z-index: 999;
 width:100%;
  height:45%;
  background:white;
  display: grid;
  top:0;
  left:0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '1': '0' )};
  top: ${({isOpen}) => (isOpen ? '0':'-100%')};
`

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.1rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

const CloseIcon = styled(FaTimes)`
color:black;
`
const DropdownWrapper= styled.div`
margin-top:30px;
`
const DropdownMenu = styled.div`
display: grid;
grid-template-column: 1fr;
grid-template-rows: repeat(3, 63px);
text-align: center;

`
const DropdownLink = styled(Link)`
display:flex;
align-item: left;
justify-content: left;
border-left:white;
border-right:white;
color:black;
font-size: 1.3rem;
text-decoration:none;
color:black;
cursor:pointer;
padding-top:40px;
padding-left:10px;

transition: 0.2s ease-in-out;
@media screen and (max-width:768px){
    font-size:1rem;
   
}

&:hover{
    color: black;
    
}
`

function Dropdown({isOpen,toggle}){
  return (
      <div>
          <DropdownContainer isOpen ={isOpen} onClick = {toggle}>
              <Icon onClick = {toggle}>
                  <CloseIcon/>
              </Icon>
              <DropdownWrapper>
                  <DropdownMenu>
                  <DropdownLink to="/" spy={true} smooth={true} offset={50} duration={500}>
                              HOME
                          </DropdownLink>
                          <DropdownLink to="about" spy={true} smooth={true} offset={-25} duration={500}>
                              ABOUT
                          </DropdownLink>
                          <DropdownLink to="skills" spy={true} smooth={true} offset={-50} duration={500}>
                             SKILLS
                          </DropdownLink>
                          <DropdownLink className = "projects" to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                             PROJECTS
                          </DropdownLink>
                           <DropdownLink className = "projects" to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                             GET RESUME
                          </DropdownLink>


                  </DropdownMenu>
              </DropdownWrapper>
          </DropdownContainer>
      </div>
  )
}
export default Dropdown;