import React from 'react';
import { Link } from "react-router-dom";
import brasileiraoLogo from '../../images/brasileiraoLogo.png'
import copaBrasilLogo from '../../images/copaBrasilLogo.png'
import libertaLogo from '../../images/libertaLogo.png'
import sulAmericanaLogo from '../../images/sulamericanaLogo.png'
import {Section, Paragraph, Container } from '../Styles/homeStyled'



const Sectionhome = () => {
return (  
  <Container>
    <div className='shadow-sm bg-body rounded'>
      <Section className='d-flex flex-column'>
        <div>
          <Paragraph>
            Pagina web desenvolvida como projeto do segundo modulo do bootcamp da Ironhack.
            Tivemos a ideia inicial de construir algo que fosse útil não apenas no quesito de aprendizado como também algo que pudéssemos manter em desenvolvimento, adicionando funcionalidades.
            O projeto baseia-se em 4 paginas onde teremos alguns dados sobre campeonatos de futebol brasileiro e sul-americano.
            Na aba <Link to='/brasileirao' className='text-decoration-none fw-bold'> campeonato brasileiro</Link>, teremos  informações sobre pontuação corrente e seus respectivos clubes, repetindo-se nas abas da <Link to='/copa-do-brasil' className='text-decoration-none fw-bold'>copa do Brasil</Link>, <Link to='/libertadores' className='text-decoration-none fw-bold'>libertadores da américa</Link> e <Link className='text-decoration-none fw-bold'>copa sul-americana</Link>.
            Qualquer dúvida ou sugestão, ficara disponível ao fim da página nossos contatos e o código-fonte do github.
            </Paragraph>

            <hr/>
            <Paragraph>
            This page was developed as a project for the second module of the Ironhack bootcamop.
            We had the initial idea of building something that would be useful not only for learning purposes but also something that we could keep in development, adding features.
            The project is based on 4 pages where we will have some data about Brazilian and South American soccer championships.
            In the <Link to='/brasileirao' className='text-decoration-none fw-bold'>Brazilian championship</Link> tab, we will have information about the current score and their respective clubs, repeating itself in the tabs of the <Link to='/copa-do-brasil' className='text-decoration-none fw-bold'>Brazil Cup</Link>, <Link to='/libertadores'className='text-decoration-none fw-bold'>Libertadores da América</Link> and <Link to='/sul-americana' className='text-decoration-none fw-bold'>South American Cup</Link>.
            Any questions or suggestions, our contacts and the github source code will be available at the end of the page.
          </Paragraph>
        </div>

        <div className='d-flex justify-content-evenly flex-wrap pt-5'>
          <Link to='/brasileirao'><img height='120px' src={brasileiraoLogo} alt='Logo campeonato brasileiro' /></Link>
          <Link to='/copa-do-brasil'><img height='120px' src={copaBrasilLogo} alt='Logo copa do Brasil'/></Link>
          <Link to='/libertadores'><img height='120px' src={libertaLogo} alt='Logo Libertadores'/></Link>
          <Link to='/sul-americana'><img height='120px' src={sulAmericanaLogo} alt='Logo Sul Americana'/></Link>
        </div>
      </Section>
    </div>
  </Container>
  );
}



export default Sectionhome ;


