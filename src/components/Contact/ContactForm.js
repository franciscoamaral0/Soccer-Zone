import React from 'react'
import emailjs from 'emailjs-com';
import { Alert, AlertTitle } from '@material-ui/lab';
import Header from '../Header-Home/Header'
import UnderHeaderImg from '../Header-Home/UnderHeaderImg';
import Footer from '../Footer/Footer';



const ContactForm = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_sl8ta7m', e.target, 'user_0MGMXl2pWORRqagktmnWp')
            .then((result) => {
                <Alert severity="success">
                    <AlertTitle>Sucesso</AlertTitle>
                    Mensagem enviada com sucesso — <strong>Obrigado!!</strong>
                </Alert>
            }, (error) => {
                <Alert severity="error">
                    <AlertTitle>Erro</AlertTitle>
                    E-mail não enviado — <strong>Verifique e Tente novamente!</strong>
                </Alert>
            });
    }

    return (
        <>
            <Header/>
            <UnderHeaderImg children="Contato" />
            <div style={{ backgroundImage: `url("https://i.pinimg.com/originals/81/b2/07/81b20736e3201de30766c8b5ba69673b.jpg")` }} className='  p-5'>
                <div className='shadow-sm p-5 bg-body rounded'>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>  
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ContactForm