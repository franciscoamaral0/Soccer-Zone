import React, { Component } from 'react';
import { Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ImageLogo from '../images/—Pngtree—football team logo_3489120.png'
import Navbar from 'react-bootstrap/Navbar'


class Header extends Component {
  state = {  }
  render() { 
    return (  
      <Navbar bg="light" expand="lg">
      <Navbar.Brand className='ps-5' href="#">  <img width="80"  src={ImageLogo}/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse className='ps-5' id="navbarScroll">
      <Nav
      className="mr-auto my-2 my-lg-0 "
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link><Link to='/brasileirao' className="text-decoration-none" >Campeonato Brasileiro </Link> </Nav.Link>
      <Nav.Link><Link to='/copa-do-brasil' className="text-decoration-none">Copa do Brasil</Link></Nav.Link>
      <Nav.Link><Link to='/libertadores' className="text-decoration-none">Libertadores</Link></Nav.Link>
      <Nav.Link><Link to='/sul-americana' className="text-decoration-none">Sulamericana</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}





export default Header;

