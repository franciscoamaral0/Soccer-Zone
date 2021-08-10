import React, { Component } from 'react';
import ImageUnderHeader from '../images/imageHight.jpg'
import Box from '@material-ui/core/Box';

class UnderHeaderImg extends Component {
  state = {  }
  render() { 
    return (
        <Box boxShadow={5} className='d-flex mb-1 justify-content-start align-items-center' style={{paddingLeft: '5%', backgroundImage: `url(${ImageUnderHeader})`, width: '100%', height: '110px' }}>
          <h1 style={{fontFamily: "'Russo One', 'sans-serif'"}} className='text-white'>{this.props.children}</h1>
          
        </Box> 
      );
    }
  }

export default UnderHeaderImg ;