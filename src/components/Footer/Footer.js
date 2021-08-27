import React, { Component } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub'
import { Container } from '../Styles/homeStyled';

class Footer extends Component {

  render() {
    return (
      <>
      <Container>
        <footer className='d-flex justify-content-evenly shadow-sm bg-body rounded ' style={{ backgroundColor: '#f4f4f8' }}>
          <div className='mt-3 mb-2 text-center   '>
            <h3 style={{color: '#2c2e72'}}className = 'm-2 '>Follow Arthur</h3>
            <div className = 'mt-4 mb-3 d-flex justify-content-evenly'>
              <a style = {{color: '#2c2e72'}} className='text-decoration-none black' rel="noopener noreferrer" href="https://www.instagram.com/arthur.melo95/" target='_blank'><InstagramIcon fontSize = 'large'/></a>
              <a style = {{color: '#2c2e72'}} href="https://m.facebook.com/arthur.melo.12" rel="noopener noreferrer" target='_blank'><FacebookIcon fontSize = 'large'/></a>
              <a style = {{color: '#2c2e72'}} href="https://www.linkedin.com/in/arthur-melo-717526146/" rel="noopener noreferrer" target='_blank'><LinkedInIcon fontSize = 'large'/></a>
              <a style = {{color: '#2c2e72'}} href="https://github.com/arthurmelo10" rel="noopener noreferrer" target='_blank'><GitHubIcon fontSize = 'large'/></a>
            </div>
          </div>
          <div className = 'mt-5 text-center'>
          <h5  style={{color: '#2c2e72'}} className='pb-4'>Copyright © 2021 - Soccer Zone</h5>
          </div>
          <div className=' text-decoration-none mt-3 mb-2 text-center'>
            <h3 style={{color: '#2c2e72'}} className = 'm-2 text-black'>Follow Francisco</h3>
            <div className = 'mt-4 mb-3 d-flex justify-content-evenly'>
              <a style = {{color: '#2c2e72'}} href="https://www.instagram.com/franciscogurgel0/" rel="noopener noreferrer" target='_blank' ><InstagramIcon fontSize = 'large'/></a>
              <a style = {{color: '#2c2e72'}} href="https://www.facebook.com/franciscogurgel777" rel="noopener noreferrer" target='_blank' ><FacebookIcon fontSize = 'large'/></a>
              <a style = {{color: '#2c2e72'}} href="https://www.linkedin.com/in/francisco-amaral-3b2490163/" rel="noopener noreferrer" target='_blank' ><LinkedInIcon fontSize = 'large'/></a>
              <a style = {{color: '#2c2e72'}} href="https://github.com/franciscoamaral0" rel="noopener noreferrer" target='_blank' ><GitHubIcon fontSize = 'large'/></a>
            </div>
          </div>
        </footer>
      </Container>
      </>
    )
  }
}

export default Footer;