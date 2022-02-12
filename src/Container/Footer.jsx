import React from 'react';
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


export function FooterContainer() { 
  return( <Footer>
          <Footer.Wrapper>
            <Footer.Row>
            <a href="https://www.facebook.com/learnbuildteach/" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
              <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                 <FontAwesomeIcon icon={faTwitter} size="2x" />
             </a>


            
            </Footer.Row>
          </Footer.Wrapper>
  </Footer>
  )
}

export default Footer;
