
import Header from '../Header'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.sass'

const Contact = () => {

    const form = useRef()

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
                alert('success')
                window.location.reload(false)
            },
            () => {
                //fail handler - need to stylize form for error handling
                alert('fail')
                window.location.reload(false)
            }
        )
    }

    return (

        <div className='container contact'>
            <Header />
            <h1> CONTACT</h1>

            <form className='form' ref={form} onSubmit={sendEmail}>
                <input type='hidden' name='subject' val='coder.xyz | Portfolio Contact Form' />
                <label className='form__label form__label-name'>
                    Name
                    <input placeholder='Name' type='text' name='name' required />
                </label>
                <label className='form__label form__label-email'>
                    Email
                    <input placeholder='email@coder.xyz' type='email' name='email' required />
                </label>
                <label className='form__label form__label-message'>
                    Message
                    <textarea placeholder='Message' name='message' required></textarea> 
                </label>
                <input type='submit' className='form__submit' value='send' />
            </form>
        </div>

    )
}

export default Contact