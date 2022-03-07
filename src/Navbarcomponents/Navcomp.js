import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-scroll"

export const Nav = styled.nav`
width:100%;
background-color: white;
color: black;
height: 85px;
display: flex;
position: fixed;
top:0;
z-index:999;
@media screen and (max-width:768px){
	height:50px;
	
}
`; 

export const NavLink = styled(Link)`
color: black;
display: flex;
font-size: 1rem;
margin-left: 60px;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 80%;
cursor: pointer;
font-family: 'Open Sans', sans-serif;
top:0;
z-index:100;

&.active {
	border-bottom: 2px solid black;
}
&:hover{
	text-decoration: none;
}
@media only screen and (max-width:1024px){
	margin-left:80px;
}
@media only screen and (max-width:768px){
	margin:0;
}
`;

export const Bars = styled(FaBars)`
display:none;
color: #808080;
@media  only screen and (max-width: 768px) {
	height:20px;
	width:20px;
	display:block;
	position:absolute;
	right: 0;
	bottom:32px;
	color:black;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
white-space: nowrap; 
z-index:100;
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
