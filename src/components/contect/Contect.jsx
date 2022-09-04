import React from 'react';
import './styleContect.scss'
import {BsFacebook, BsInstagram, BsTelegram} from 'react-icons/bs'

import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const Contect = () => {

  // send message to to Asia
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ph3l85p', 'template_3gjbo2j', form.current, 'sIoeg3fa0IhpJ8PCu')
      .then((result) => {
          alert('Sent successfully');
      }, (error) => {
          console.log(error.text);
          console.log('The message was not sent');
      });
  };

  return (
    <div className='containerContect' id='contact'>
    <h1 className='titleContect'>أتصل بنا</h1>
      <div className='wrapperContact'>
        <div className='iconsContact'>
        <a href='https://ar-ar.facebook.com/'><BsFacebook className='icon'/></a>
        <a href='https://www.instagram.com/'><BsInstagram className='icon'/></a>
        <a href='https://web.telegram.org/'><BsTelegram className='icon'/></a>
        </div>

        <form className='formContact' ref={form} onSubmit={sendEmail}>
            <input type='text' placeholder='الأسم' required name='user_name'/>
            <input type='email' placeholder='البريد الأكتروني' name='user_email' />
            <textarea placeholder="اكتب رسالتك هنا " required name='message'></textarea>
            <button>ارسال</button>
        </form>


      </div>
    </div>
  );
}

export default Contect;
