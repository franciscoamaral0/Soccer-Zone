import React, { Component } from 'react';
import ImageUnderHeader from '../images/imageHight.jpg'

class UnderHeaderImg extends Component {
  state = {  }
  render() { 
    return (
      <div className='d-flex justify-content-start align-items-center' style={{paddingLeft: '15%', backgroundImage: `url(${ImageUnderHeader})`, width: '100%', height: '110px' }}>
        <h1 style={{fontFamily: "'Russo One', 'sans-serif'"}} className='text-white'>{this.props.children}</h1>
        
      </div> 
     );
  }
  }

export default UnderHeaderImg ;