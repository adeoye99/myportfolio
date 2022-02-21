import React from 'react';
import { Nav,NavLink,Bars,NavMenu,Logo } from "./Navcomp"; 

function Navbar({toggle}){
  return( <div>
            <Nav>
                <Bars onClick ={toggle}/>
                <Logo>ADEOYE SULAIMON KOLAWOLE</Logo>
                  <NavMenu>
                     <NavLink to = "/Home">
                        HOME
                    </NavLink>
                    <NavLink to = "/About">
                        ABOUT
                    </NavLink>
                    <NavLink to = "/Projects">
                        PROJECTS
                    </NavLink>
                </NavMenu>
            </Nav>
  </div>
  );
}

export default Navbar;
