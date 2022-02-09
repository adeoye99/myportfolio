import React from 'react';
import { Nav,NavLink,Bars,NavMenu } from "./Navcomp"; 

function Navbar(){
  return( <div>
            <Nav>
                <Bars/>
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
