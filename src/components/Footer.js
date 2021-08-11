import React, { Component } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub'

class Footer extends Component {

  render() {
    return (
      <footer className='d-flex justify-content-evenly' style={{ backgroundColor: '#ffffff', backgroundImage: ' linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)', width: '100vw', height: '150px' }}>
        <div className='mt-3 mb-2 text-center '>
          <h3 className = 'm-2 text-black'>Follow Arthur</h3>
          <div className = 'mt-4 mb-3 d-flex justify-content-evenly'>
            <a style = {{color: 'inherit'}} className='text-decoration-none black' href="#"><InstagramIcon color = 'disable' fontSize = 'large'/></a>
            <a style = {{color: 'inherit'}} href="#"><FacebookIcon color = 'disable' fontSize = 'large'/></a>
            <a style = {{color: 'inherit'}} href="#"><LinkedInIcon color = 'disable' fontSize = 'large'/></a>
            <a style = {{color: 'inherit'}} href="#"><GitHubIcon color = 'disable' fontSize = 'large'/></a>
          </div>
        </div>
        <div className = 'mt-5 text-center'>
        <h5>Copyright © 2021 - Soccer Zone</h5>
        </div>
        <div className=' text-decoration-none mt-3 mb-2 text-center'>
          <h3 className = 'm-2 text-black'>Follow Francisco</h3>
          <div className = 'mt-4 mb-3 d-flex justify-content-evenly'>
            <a style = {{color: 'inherit'}} href="#"><InstagramIcon color = 'disable' fontSize = 'large'/></a>
            <a style = {{color: 'inherit'}} href="#"><FacebookIcon color = 'disable' fontSize = 'large'/></a>
            <a style = {{color: 'inherit'}} href="#"><LinkedInIcon color = 'disable' fontSize = 'large'/></a>
            <a style = {{color: 'inherit'}} href="#"><GitHubIcon color = 'disable' fontSize = 'large'/></a>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;