import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background-color: white;
color: black;
height: 85px;
display: flex;
width:100%;
z-index: 22;
`; 

export const NavLink = styled(Link)`
color: black;
display: flex;
font-size: 1.1rem;
margin-left: 100px;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-family: 'Open Sans', sans-serif;
&.active {
	color: black;
}
&:hover{
	text-decoration: underline;
}
@media only screen and (max-width:768px){
	margin:0;
}
`;

export const Bars = styled(FaBars)`
display:none;
color: #808080;
@media  only screen and (max-width: 768px) {
	display:block;
	position:absolute;
	right: 0;
	color:black;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right:auto;
white-space: nowrap; 
@media screen and (max-width: 768px) {
	display: none;
}
`;


export const Logo = styled.h4`
    display:flex; 
    margin-top: auto;
    margin-bottom:auto;
	margin-left:20px;
    font-family: 'Orbitron', sans-serif;
@media only screen and (max-width:768px){
	   display:flex;
	   margin-left:10px;
      flex-direction:column;
	  font-size:12px;

    }

`
