import React, { Component } from 'react';
import Header from './Header';
import UnderHeaderImg from './UnderHeaderImg';
import axios from 'axios';
import './tablesStyled.css';


class Viewtables extends Component {
  state = {  
    time :[]
    
  }

  componentDidMount(){
    axios.get('https://api.api-futebol.com.br/v1/campeonatos/14/tabela',{headers:{'Authorization': 'Bearer test_cd742736980799740abf5ccaa74d2e' }}).then(result =>{
      const {data} = result
      
      this.setState({
        time: data
        
      })
    })
  }

  renderTableData= () =>{
    return this.state.time.map((element) =>{
      return(
        <tr key={element.time.time_id}>
        <td>{element.posicao}</td>
        <td><img width='23px' src={element.time.escudo}/></td>
        <td>{element.time.nome_popular}</td>
        <td>{element.aproveitamento}</td>
        </tr>
      )
    })
  }

  renderTableHeader = () => {
    const headerNames = ['#', '', 'CLUBE', 'PONTOS' ]
    return headerNames.map((element,index) => {
      return <th key={index}>{element}</th>
    })
  }


  
  render() { 
    return (  
      <>
      
      <Header/>
      <UnderHeaderImg children='Brasileirão'/> 
      <div style={{backgroundImage: `url("https://i.pinimg.com/originals/81/b2/07/81b20736e3201de30766c8b5ba69673b.jpg")`}} className='  p-5'>
      <div className='shadow-sm p-5 bg-body rounded d-flex  align-self-baseline '>
      <div className=' w-100 d-flex justify-content-evenly'>
        
          <div>
            <h2 id='title'>Classificação</h2>
              <table id='clubs'>
                <tbody>
                <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
                </tbody>
              </table>
          </div>
                

        
      </div>
      </div>
      </div>
      
      </>
    );
  }
}
 
export default Viewtables ;


 