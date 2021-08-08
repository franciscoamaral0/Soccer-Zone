import React from 'react';
import { Carousel } from 'react-bootstrap';
import ImageCarrousel from '../images/borussia-dortmund-4k-fans-tribune-bundesliga (1).jpg'
import Figure from 'react-bootstrap/Figure'
import { className } from 'postcss-selector-parser';

const Sectionhome = () => {
return (  
  <div style={{backgroundImage: `url("https://i.pinimg.com/originals/81/b2/07/81b20736e3201de30766c8b5ba69673b.jpg")`}} className='  p-5'>
    <div className='shadow-sm p-5 bg-body rounded d-flex  align-self-baseline '>
      <div className=' w-100 '>
        <Figure className=' p-2 '>
          <Figure.Image
            width={250}
            height={180}
            alt="171x180"
            src="https://www.aljazeera.com/wp-content/uploads/2021/07/2021-07-11T223531Z_1181401992_UP1EH7B1QR51D_RTRMADP_3_SOCCER-EURO-ITA-ENG-REPORT.jpg?resize=770%2C513"
          />
          <Figure.Caption className='text-center'>
            Final Euro 2021
          </Figure.Caption>
        </Figure>
        <Figure className='p-2 '>
          <Figure.Image
            width={250}
            height={180}
            alt="171x180"
            src="https://i.guim.co.uk/img/media/74fe162839e316597767d91bfb136dfa01ab62fc/0_23_2048_1228/master/2048.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=7cf27f6881209d880e676f4fa5871e09"
          />
          <Figure.Caption className='text-center'>
            Final World Cup 2002
          </Figure.Caption>
        </Figure>
      </div>
        
      <div className=''>
        <p className='fs-5 ps-5 text-wrap' style={{fontFamily: 'roboto'}}>
        Pagina web desenvolvida como projeto do segundo modulo do bootcamp da Ironhack.
          Tivemos a ideia inicial de construir algo que fosse útil não apenas no quesito de aprendizado como também algo que pudéssemos manter em desenvolvimento, adicionando funcionalidades.
          O projeto baseia-se em 4 paginas onde teremos alguns dados sobre campeonatos de futebol brasileiro e sul-americano.
          Na aba campeonato brasileiro, teremos  informações sobre pontuação corrente e seus respectivos clubes, repetindo-se nas abas da copa do Brasil, libertadores da américa e copa sul-americana.
          Qualquer dúvida ou sugestão, ficara disponível ao fim da página nossos contatos e o código-fonte do github.
          <hr/>

          This page was developed as a project for the second module of the Ironhack bootcamop.
          We had the initial idea of building something that would be useful not only for learning purposes but also something that we could keep in development, adding features.
          The project is based on 4 pages where we will have some data about Brazilian and South American soccer championships.
          In the Brazilian championship tab, we will have information about the current score and their respective clubs, repeating itself in the tabs of the Brazil Cup, Libertadores da América and South American Cup.
          Any questions or suggestions, our contacts and the github source code will be available at the end of the page.
        </p>
      </div>
    </div>
  </div>
  );
}



export default Sectionhome ;


