import React from 'react';
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export function FooterContainer() {
  const currentyear = new Date().getFullYear();
  return( <Footer>
          <Footer.Wrapper>
            <Footer.Row>
              <a href="https://www.twitter.com" className="twitter social">
                 <FontAwesomeIcon icon={faTwitter} size="2x" />
                 <p>Twitter</p>
             </a>
             <a href="https://www.github.com/jamesqquick" className="github social">
                 <FontAwesomeIcon icon={faGithub} size="2x" />
                 <p>Github</p>
             </a>
             <a href="https://www.github.com/jamesqquick" className="github social">
                 <FontAwesomeIcon icon={faInstagram} size="2x" />
                 <p>Instagram</p>
             </a>
            </Footer.Row>
            <hr/>
            <span class ="footer__year">
              Copyright © {currentyear}
          </span>
         </Footer.Wrapper>
        
  </Footer>
  )
}

export default Footer;
