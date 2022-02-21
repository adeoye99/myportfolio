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
 margin-bottom:30px;
`
const Contactform = styled.form`
 display:flex;
 flex-direction:column;
 margin-left:auto;
 margin-right:auto;
`
const Contactinput = styled.input`
 width:500px;
 height:30px;
 margin-top:50px;
`
const Contactinputmessage = styled.input`
 width:500px;
 height:100px;
 margin-top:50px;
`
const Contactbutton = styled.button`
 width:100px;
 justify-content:center;
 text-align:center;
 margin-top:50px;
`
const API_ID = process.env.REACT_APP_CLIENT_ID;
console.log(process.env.REACT_APP_CLIENT_ID);
function Contact() {
  function sendEmail(e){
    e.preventDefault();
   
    emailjs.sendForm('gmail' , 'template_rgjtao7', e.target,`${API_ID}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  return (
    <Contactcontainer>
        <Contactform onSubmit={sendEmail}>
          <Contacttitle>Contact Me</Contacttitle>
          <Contactinput type= "text" placeholder="Name" name = "name" />
          <Contactinput type= "email" placeholder="Email" name = "email"/>
          <Contactinput type= "text" placeholder="Subject" name = "subject"/>
          <Contactinputmessage type= "text" placeholder = "Message" name = "message" />
          <Contactbutton type = "submit" value = "message">Send</Contactbutton>
        </Contactform>
    </Contactcontainer>
  )
}

export default Contact