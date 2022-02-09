import React from 'react';
import Footer from "../Components/Footer"

export function FooterContainer() { 
  return( <Footer>
          <Footer.Wrapper>
            <Footer.Row>
            <Footer.Column>
              <Footer.Title>About Us</Footer.Title>
              <Footer.Link href = "#">Story</Footer.Link>
              <Footer.Link href = "#">Clients</Footer.Link>
              <Footer.Link href = "#">Testimonials</Footer.Link>
            </Footer.Column>
            <Footer.Column>
              <Footer.Title>Socials</Footer.Title>
              <Footer.Link href = "#">Twitter</Footer.Link>
              <Footer.Link href = "#">Github</Footer.Link>
              <Footer.Link href = "#">Instagram</Footer.Link>
            </Footer.Column>
            </Footer.Row>
          </Footer.Wrapper>
  </Footer>
  )
}

export default Footer;
