import React from 'react';
import { Nav,NavLink,Bars,NavMenu,Logo } from "./Navcomp"; 

function Navbar({toggle}){
  return( <>
            <Nav>
                <Bars onClick ={toggle}/>
                <Logo>ADEOYE SULAIMON KOLAWOLE</Logo>
                  <NavMenu>
                     <NavLink href = "home">
                        HOME
                    </NavLink >
                    <NavLink href = "about">
                        ABOUT
                    </NavLink>
                    <NavLink  href = "project">
                        PROJECTS
                    </NavLink>
                </NavMenu>
            </Nav>
  </>
  );
}

export default Navbar;
