import React, { Component } from 'react';
import ImageUnderHeader from '../images/cropped_image.png'

class UnderHeaderImg extends Component {
  state = {  }
  render() { 
    return (
      <div className='d-flex justify-content-center align-items-center' style={{ backgroundImage: `url(${ImageUnderHeader})`, width: '100%', height: '130px' }}>
        <h1 style={{fontFamily: "'Roboto', 'sans-serif'"}} className='text-white'>{this.props.children}</h1>
        
      </div> 
     );
  }
  }

export default UnderHeaderImg ;