import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';
import 'animate.css';
import { FormattedMessage } from 'react-intl';


export const Contact = () => {

  const [btnText, setBtnText] = useState('send');


  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnText('Sending...');

    emailjs.sendForm('service_jar12r5','template_fmmcz0j',e.target,'udLtDZ_TCph6lDgpr')
    .then( response => console.log(response) )
    .catch(error => console.log(error))
    setBtnText('send');
  }

  return(
    <section id='contact' className='contact'>
       <div className='conteiner-from'>
        <h1><FormattedMessage id='app.contact.title' /></h1>
        <form onSubmit={handleSubmit}>
            <input
              placeholder='Firts name'
              type='text'
              name='user-name'
              autoComplete='off'
              />
            <input
              placeholder='Last name'
              type='text'
              name='user-last-name'
              autoComplete='off'
              />
            <input
              placeholder='Email'
              type='email'
              name='user-email'
              autoComplete='off'
              />
            <input
              placeholder='Phone'
              type='tel'
              name='user-phone'
              autoComplete='off'
              />
              <textarea placeholder='Reason for contact' name='user-message'></textarea>
        </form>
        <button type='submit'><span>{btnText}</span></button>
      </div>
    </section>
  );
};
