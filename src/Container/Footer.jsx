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
  return( <Footer>
          <Footer.Wrapper>
            <Footer.Row>
              <a href="https://www.twitter.com" className="twitter social">
                 <FontAwesomeIcon icon={faTwitter} size="3x" />
                 <p>Twitter</p>
             </a>
             <a href="https://www.github.com/jamesqquick" className="github social">
                 <FontAwesomeIcon icon={faGithub} size="3x" />
                 <p>Github</p>
             </a>
             <a href="https://www.github.com/jamesqquick" className="github social">
                 <FontAwesomeIcon icon={faInstagram} size="3x" />
                 <p>Instagram</p>
             </a>
            </Footer.Row>
          </Footer.Wrapper>
  </Footer>
  )
}

export default Footer;
