import React from 'react';
import { Nav,NavLink,Bars,NavMenu,Logo } from "./Navcomp"; 

function Navbar(){
  return( <div>
            <Nav>
                <Bars/>
                <Logo>Adeoye Sulaimon Kolawole</Logo>
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
