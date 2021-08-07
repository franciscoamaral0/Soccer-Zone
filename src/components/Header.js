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
      <Navbar.Brand href="#">  <img width="80"  src={ImageLogo}/> </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav
      className="mr-auto my-2 my-lg-0 "
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Link to='/brasileirao' className="text-decoration-none" ><Nav.Link>Campeonato Brasileiro</Nav.Link></Link>
      <Link to='/copa-do-brasil' className="text-decoration-none"><Nav.Link>Copa do Brasil</Nav.Link></Link>
      <Link to='/libertadores' className="text-decoration-none"><Nav.Link>Libertadores</Nav.Link></Link>
      <Link to='/sul-americana' className="text-decoration-none"><Nav.Link>Sulamericana</Nav.Link></Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}





export default Header;

