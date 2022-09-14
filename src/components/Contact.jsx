import React from 'react'
import '../css/Contact.css'
import {SiGmail} from 'react-icons/si'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_ubz2yzn', 'template_i1wgo1o', form.current, 'gf8dryPUX0DRAMY-z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__containe">
        <div className="contact__options">
          <article className='contact__option'>
            <SiGmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>test@gmail.com</h5>
            <a href="mailto:test@gmail.com" target="_blank" rel="noreferrer">Send an email</a>
          </article>

          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+34 600 12 34 56</h5>
            <a href="https://wa.me/34600123456"  target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className='contact__option'>
            <AiOutlineInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>@userInstagram</h5>
            <a href="https://instagram.com"  target="_blank" rel="noreferrer">Add me as friend</a>
          </article>
        </div>
  
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="name" placeholder='name' required />
          <input type="email" name='email' id='email' placeholder='email' required />
          <textarea name="message" id="message" rows="10" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact