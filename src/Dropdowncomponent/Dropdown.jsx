import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import menuData from "../Data/menuData";
import { FaTimes } from "react-icons/fa";
const DropdownContainer = styled.div`
  position : fixed;
  z-index: 999;
  width: 100%;
  height:25%;
  background:white ;
  display: grid;
  align-items:center;
  top:0;
  left:0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '1': '0' )};
  top: ${({isOpen}) => (isOpen ? '0':'-100%')};
  @media screen and (max-width:768px){
      height:50%;
  }
`

const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.1rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none
`

const CloseIcon = styled(FaTimes)`
color:black;
`
const DropdownWrapper= styled.div``
const DropdownMenu = styled.div`
display: grid;
grid-template-column: 1fr;
grid-template-rows: repeat(3, 53px);
text-align: center;
margin-bottom: 4rem;

`
const DropdownLink = styled(Link)`
 display:flex;
 align-item: left;
 justify-content: left;
 border-bottom:1px solid black ;
 border-left:white;
 border-right:white;
 color:black;
 font-size: 1.3rem;
 text-decoration:none;
 color:black;
 cursor:pointer;
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
                  <DropdownLink to = "/home">
                              HOME
                          </DropdownLink>
                          <DropdownLink to = "/mylist">
                              ABOUT
                          </DropdownLink>
                          <DropdownLink to = "/Latest">
                             PROJECTS
                          </DropdownLink>
                  </DropdownMenu>
              </DropdownWrapper>
          </DropdownContainer>
      </div>
  )
}
export default Dropdown;