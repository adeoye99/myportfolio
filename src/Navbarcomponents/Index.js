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
                        About
                    </NavLink>
                    <NavLink to = "/Projects">
                        Projects
                    </NavLink>
                </NavMenu>
            </Nav>
  </div>
  );
}

export default Navbar;
