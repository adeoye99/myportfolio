import React,{ useRef } from 'react'
import styled from "styled-components"
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
const REACT_APP_API_ID = process.env.REACT_APP_CLIENT_ID;
init(`${REACT_APP_API_ID}`);


const Contacttitle = styled.h2`
 width:500px;
 margin-left:auto;
 margin-right:auto;
 margin-top:50px;
 text-align:center;
 font-family: 'Open Sans', sans-serif;
 @media screen and (max-width:768px){
   margin-top:20px;
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
 font-family: 'Open Sans', sans-serif;
 @media screen and (max-width:768px){
  width:90%;
  margin-left:auto;
  margin-right:auto;
}
`
const Contactinputmessage = styled.textarea`
 width:500px;
 height:100px;
 margin-top:50px;
 padding-top:5px;
 padding-left:5px;
 font-family: 'Open Sans', sans-serif;
 @media screen and (max-width:768px){
  width:90%;
  margin-left:auto;
  margin-right:auto;
}
`
const Contactbutton = styled.input`
 width:100px;
 height:30px;
 border-radius:5px;
 color:white;
 background-color:black;
 border:none;
 justify-content:center;
 text-align:center;
 margin-top:50px;
 @media screen and (max-width:768px){
   margin-left:15px;

}

`
const REACT_APP_SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const REACT_APP_TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
function Contact() {
    const form = useRef();
  
  function sendEmail(e){
    e.preventDefault();
   
    emailjs.sendForm(`${REACT_APP_SERVICE_ID}`,`${REACT_APP_TEMPLATE_ID}`, form.current,`${REACT_APP_API_ID}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  return (
    <Contactcontainer id = "contact">
         <Contacttitle>Contact Me</Contacttitle>
        <Contactform data-aos ="fade-left" ref ={form} onSubmit={sendEmail}>
       
          <Contactinput type = "text" placeholder="Name" name = "user_name" />
          <Contactinput type = "email" placeholder="Email" name = "user_email"/>
          <Contactinput type = "text" placeholder="Subject" name = "subject"/>
          <Contactinputmessage  placeholder ="Your message" name = "message" />
          <Contactbutton type ="submit" value ="Send"></Contactbutton>
        </Contactform>
    </Contactcontainer>
  )
}

export default Contact