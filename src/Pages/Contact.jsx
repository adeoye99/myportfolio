import React from 'react'
import styled from "styled-components"
import emailjs from '@emailjs/browser';

const Contacttitle = styled.h2`
 width:500px;
 margin-top:50px;
 text-align:center;
 font-family: 'Open Sans', sans-serif;
 @media screen and (max-width:768px){
   width:100%;
 }
`
const Contactcontainer = styled.div`
 display:flex;
 flex-direction:column;
 margin-left:auto;
 margin-right:auto;
 @media screen and (max-width:768px){
  width:100%;
}

`
const Contactform = styled.form`
 display:flex;
 flex-direction:column;
 margin-left:auto;
 margin-right:auto;
 margin-bottom:30px;
 margin-top:30px;
 @media screen and (max-width:768px){
  width:100%;
}
`
const Contactinput = styled.input`
 width:500px;
 height:30px;
 margin-top:50px;
 @media screen and (max-width:768px){
  width:90%;
  margin-left:auto;
  margin-right:auto;
}
`
const Contactinputmessage = styled.input`
 width:500px;
 height:100px;
 margin-top:50px;
 @media screen and (max-width:768px){
  width:90%;
  margin-left:auto;
  margin-right:auto;
}
`
const Contactbutton = styled.input`
 width:100px;
 justify-content:center;
 text-align:center;
 margin-top:50px;
 @media screen and (max-width:768px){
   margin-left:5%;

}

`
const API_ID = process.env.REACT_APP_CLIENT_ID;
console.log(process.env.REACT_APP_CLIENT_ID);
function Contact() {
  function sendEmail(e){
    e.preventDefault();
   
    emailjs.sendForm('Gmail' , 'template_rgjtao7', e.target,`${API_ID}`)
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
          <Contactbutton type = "submit" value = "send" />
        </Contactform>
    </Contactcontainer>
  )
}

export default Contact