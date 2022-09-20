import React, { useState } from 'react';
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const form = useRef()
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
   
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_0ezcggf',
            'template_a148fum',
            form.current,
            'DElYtzPaZ92SyzZww'
        ).then(
            () => {
                //success handler - need to hide form and show success message
                setSuccessMessage("Thank you for chatting, I'll reach out soon!");
                window.location.reload(false)
            },
            () => {
                //fail handler - need to stylize form for error handling
                setErrorMessage('Sorry - There was an error submitting your message, please try again shortly or email me directly at: velasquezliz27@gmail.com');
                window.location.reload(false)
            }
        )
    }

    return (

        <div className='contact' name="contact">
            <div className='contact__container'>
                <h1 className='contact__title'> Contact</h1>
                {errorMessage && (
                    <p className="error"> {errorMessage} </p>
                )}
                {successMessage && (
                    <p className="error"> {errorMessage} </p>
                )}
                <form className='contact__form' ref={form} onSubmit={sendEmail}>
                    <input type='hidden' name='subject' val='coder.xyz | Portfolio Contact Form' />
                    <div className='contact__form-col contact__form-col--1'>
                        <label className='contact__form-label contact__form-label--name'>
                            Name
                            <input className='contact__form-input' placeholder='Name' type='text' name='name' required />
                        </label>
                        <label className='contact__form-label contact__form-label--email'>
                            Email
                            <input className='contact__form-input' placeholder='email@coder.xyz' type='email' name='email' required />
                        </label>
                        <label className='contact__form-label contact__form-label--song'>
                            What song is on your mind?
                            <input className='contact__form-input' placeholder='Our World - Juno Reactor' type='text' name='song' />
                        </label>
                    </div>
                    <div className='contact__form-col contact__form-col--2'>
                        <label className='contact__form-label contact__form-label--message'>
                            Message
                            <textarea className='contact__form-textarea' placeholder="Let's chat..." name='message' required></textarea> 
                        </label>
                        <input type='submit' className='contact__form-btn' value='send' />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Contact