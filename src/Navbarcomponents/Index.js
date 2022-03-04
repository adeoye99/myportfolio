import React from 'react';
import { Nav,NavLink,Bars,NavMenu,Logo } from "./Navcomp"; 

function Navbar({toggle}){
  return( <>
            <Nav>
                <Bars onClick ={toggle}/>
                <Logo>ADEOYE SULAIMON KOLAWOLE</Logo>
                  <NavMenu>
                     <NavLink to="/" spy={true} smooth={true} offset={-100} duration={500}>
                        HOME
                    </NavLink >
                    <NavLink to="about" spy={true} smooth={true} offset={-80} duration={500}>
                        ABOUT
                    </NavLink>
                    <NavLink to="skills" spy={true} smooth={true} offset={-80} duration={500}>
                        MY SKILLS
                    </NavLink>
                    <NavLink to="projects" spy={true} smooth={true} offset={-100} duration={500}>
                        PROJECTS
                    </NavLink>
                </NavMenu>
            </Nav>
  </>
  );
}

export default Navbar;
