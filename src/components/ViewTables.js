import React, { Component } from 'react';
import Header from './Header';
import UnderHeaderImg from './UnderHeaderImg';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Table } from 'react-bootstrap';


class Viewtables extends Component {
  state = {  }
  
  render() { 
    return (  
      <>
      <Header/>
      <UnderHeaderImg children='Brasileirão'/> 
      <div style={{backgroundImage: `url("https://i.pinimg.com/originals/81/b2/07/81b20736e3201de30766c8b5ba69673b.jpg")`}} className='  p-5'>
      <div className='shadow-sm p-5 bg-body rounded d-flex  align-self-baseline '>
      <div className=' w-100 d-flex justify-content-evenly'>
        <div>
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>Clube</th>
                  <th>Pontos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.position}dasdasdadasdadasda</td>
                  <td>{this.props.escudo}dasdasdasdas</td>
                  <td>{this.props.clube}dasdasdas</td>
                  <td>{this.props.pontos}dasdasdas</td>
                </tr>
                
              </tbody>
            </Table>
          </div>

          <div>
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Posição</th>
                  <th>Clube</th>
                  <th>Pontos</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.props.position}1</td>
                  <td>{this.props.escudo}ATA</td>
                  <td>{this.props.clube}<img width='30px' src='https://apifutebol.s3.sa-east-1.amazonaws.com/escudos/5f999d8090849.svg'/></td>
                  <td>{this.props.gols}Gabigol</td>
                </tr>
                
              </tbody>
            </Table>
          </div>

        
      </div>
      </div>
      </div>
      
      </>
    );
  }
}
 
export default Viewtables ;