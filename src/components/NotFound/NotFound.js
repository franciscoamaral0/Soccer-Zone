import React from "react";
import Header from "../Header-Home/Header";
import UnderHeaderImg from "../Header-Home/UnderHeaderImg";
import { Container, NotFoundStyledH1 } from "../Styles/homeStyled";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

const NotFound = () => {
  return ( 
    <>
      <Header/>
        <UnderHeaderImg children='Pagina não encontrada'/>
          <Container>
            <div className="shadow-sm p-4 bg-body rounded">
              <NotFoundStyledH1 className='text-center'>
              404
              </NotFoundStyledH1>
              <div className= 'd-flex justify-content-center'>

              <Button size='large' variant="contained" style={{ backgroundColor:'#212529'}}><Link className='text-decoration-none fs-5 text-white fw-bold' to='/'>Home</Link></Button>
              </div>
            </div>
      </Container>
      <Footer/>
    </>
      
    );
}

export default NotFound;