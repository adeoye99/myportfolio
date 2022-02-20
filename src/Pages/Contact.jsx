import React from 'react'
import styled from "styled-components"
import emailjs from '@emailjs/browser';

const Contacttitle = styled.h2`
 width:500px;
 margin-top:50px;
`
const Contactcontainer = styled.div`
 display:flex;
 flex-direction:column;
 margin-left:auto;
 margin-right:auto;
`
const Contactform = styled.form`
 display:flex;
 flex-direction:column;
 margin-left:auto;
 margin-right:auto;
`
const Contactinput = styled.input`
 width:500px;
 margin-top:50px;
`
const Contactbutton = styled.button`
 width:500px;
 margin-top:50px;
`

function Contact() {
  function sendEmail(e){
    console.log(process.env.REACT_APP_CLIENT_ID);
const API_KEY = process.env.REACT_APP_CLIENT_ID;
    e.preventDefault();
   
    emailjs.sendForm('gmail', 'template_rgjtao7', e.target, API_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <Contactcontainer>
        <Contactform onSubmit={sendEmail}>
          <Contactinput type= "text" placeholder="Name" />
          <Contactinput type= "text" placeholder = "Message" />
          <Contactbutton>Send</Contactbutton>
        </Contactform>
    </Contactcontainer>
  )
}

export default Contact