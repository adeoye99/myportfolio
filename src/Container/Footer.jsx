import React from 'react';
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

export function FooterContainer() {
  const currentyear = new Date().getFullYear();
  return( <Footer>
          <Footer.Wrapper>
            <Footer.Row>
              <a href="https://twitter.com/SulaimonAdeoye5" className="twitter social">
                 <FontAwesomeIcon icon={faTwitter} size="2x" />
                 <p>Twitter</p>
             </a>
             <a href="https://www.instagram.com/adeoye99" className="github social">
                 <FontAwesomeIcon icon={faGithub} size="2x" />
                 <p>Github</p>
             </a>
             <a href="https://www.linkedin.com/in/kolawole-adeoye-0761981b2" className="facebook social">
                 <FontAwesomeIcon icon={faLinkedin} size="2x" />
                 <p>Linkedin</p>
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
