import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import ImageLogo from '../../images/03b0b151b42a829d87b3707368ec601d-removebg-preview.png'
import Navbar from 'react-bootstrap/Navbar'
import '../../App';




class Header extends Component {
  state = {  }
  render() { 
    return (  
      <Navbar collapseOnSelect bg="light" expand="lg">
      
      <Navbar.Brand className='ps-5' href="#"> <Link to='/'> <img width="90px" src={ImageLogo} alt='Logo Soccer Zone'/></Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className='ps-5' id="responsive-navbar-nav">
      <Nav className="me-auto">

      <Nav.Link><NavLink to='/brasileirao' activeClassName="is-active" className="text-dark text-decoration-none test" >Campeonato Brasileiro </NavLink> </Nav.Link>
      <Nav.Link><NavLink to='/copa-do-brasil'  activeClassName="is-active" className="text-dark text-decoration-none test">Copa do Brasil</NavLink></Nav.Link>
      <Nav.Link><NavLink to='/libertadores'  activeClassName="is-active" className="text-dark text-decoration-none test">Libertadores</NavLink></Nav.Link>
      <Nav.Link><NavLink to='/sul-americana'  activeClassName="is-active" className="text-dark text-decoration-none test ">Sulamericana</NavLink></Nav.Link>
      <Nav.Link><NavLink to='/contato'  activeClassName="is-active" className="text-dark text-decoration-none test ">Contato</NavLink></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  
</Navbar>
    );
  }
}





export default Header;

