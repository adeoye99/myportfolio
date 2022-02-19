import React from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  function sendEmail(){
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" paceholder = "Message" />
          <button>Send</button>
        </form>
    </div>
  )
}

export default Contact