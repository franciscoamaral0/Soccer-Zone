import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import ImageLogo from '../images/03b0b151b42a829d87b3707368ec601d-removebg-preview.png'
import Navbar from 'react-bootstrap/Navbar'
import '../App.css';


class Header extends Component {
  state = {  }
  render() { 
    return (  
      <Navbar bg="light" expand="lg">
      <Navbar.Brand className='ps-5' href="#"> <Link to='/'> <img width="100" src={ImageLogo}/></Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse className='ps-5' id="navbarScroll">
      <Nav
      className="mr-auto my-2 my-lg-0 "
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link><NavLink to='/brasileirao' activeClassName="is-active" className="text-dark text-decoration-none test" >Campeonato Brasileiro </NavLink> </Nav.Link>
      <Nav.Link><NavLink to='/copa-do-brasil'  activeClassName="is-active" className="text-dark text-decoration-none test">Copa do Brasil</NavLink></Nav.Link>
      <Nav.Link><NavLink to='/libertadores'  activeClassName="is-active" className="text-dark text-decoration-none test">Libertadores</NavLink></Nav.Link>
      <Nav.Link><NavLink to='/sul-americana'  activeClassName="is-active" className="text-dark text-decoration-none test ">Sulamericana</NavLink></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}





export default Header;

