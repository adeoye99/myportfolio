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

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: white;
}
`;
export const Logo = styled.h4`
     display:flex;
	 flex-direction: row;
    margin-top: auto;
    margin-bottom:auto;
	margin-left:50px;
    font-family: 'Orbitron', sans-serif;
@media only screen and (max-width:768px){
      flex-direction: column;
        margin-left: 10px;
        
    }

`
