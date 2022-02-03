import React from 'react';
import {Nav ,Bars ,NavMenu,NavLink } from "./Navcomp"

function index() {
  return <div>
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
                <NavLink>
                        
               </NavLink>
            </Nav>

      



  </div>;
}

export default index;
