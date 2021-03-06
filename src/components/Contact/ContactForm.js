import React from "react";
import emailjs from "emailjs-com";
import { Alert } from "@material-ui/lab";
import Header from "../Header-Home/Header";
import UnderHeaderImg from "../Header-Home/UnderHeaderImg";
import Footer from "../Footer/Footer";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Component } from "react";
import {StyledSnackbar} from '../Styles/tableStyled'
import { Container } from "../Styles/homeStyled";
import { FormDivHeader } from "../Styles/ContactStyled";

class ContactForm extends Component {
  state = {
    loadingOk: false,
    loadingError: false
  }
  
  sendEmail = async (e) => {
    e.preventDefault();

    try{
      await emailjs.sendForm("gmailMessage", "template_sl8ta7m", e.target, "user_0MGMXl2pWORRqagktmnWp")
      this.setState({
        loadingOk: true
      })
      
    } catch(error){
      this.setState({
        loadingError: true
      })

    } e.target.reset()
  }

  handleClose = () => {
    this.setState({
      loadingOk: false,
      loadingError: false
    })

  }


render(){
  return (
    <>
      <Header />
      <UnderHeaderImg children="Contato" />
      <Container>
        <div className="shadow-sm p-4 bg-body rounded">
        <FormDivHeader className='text-center '>

        <h2>TEM ALGUMA DÚVIDA OU SUGESTÃO?</h2>
        <h5>Nós queremos ouvir as suas dúvidas e sugestões. Fique à vontade para nos enviar
                uma mensagem e em breve entraremos em contato com você.</h5>
        </FormDivHeader>
          <div >
            <Form onSubmit={this.sendEmail} >
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nome</Form.Label>
                <Form.Control input type="text" name="name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="user_email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as="textarea" name="message" rows={4} />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit" size='lg'>
                  Enviar
                </Button>
              </div>
            </Form>

            <StyledSnackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={this.state.loadingOk} autoHideDuration={2200} onClose={this.handleClose}>
              <Alert onClose={this.handleClose} severity="success">
                Mensagem enviada com sucesso! 
              </Alert>
            </StyledSnackbar>
            <StyledSnackbar anchorOrigin={{vertical: 'top', horizontal: 'right'}} open={this.state.loadingError} autoHideDuration={2200} onClose={this.handleClose}>
              <Alert onClose={this.handleClose} severity="error">
                Erro, verifique e tente novamente!
              </Alert>
            </StyledSnackbar>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}}
          

export default ContactForm;
