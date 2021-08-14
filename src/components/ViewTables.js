import React, { Component } from 'react';
import Header from './Header';
import UnderHeaderImg from './UnderHeaderImg';
import './tablesStyled.css';
import Apiresponse from '../Api/Apiresponse';


class Viewtables extends Component {
  state = {  
    time :[],
    rodada:[],
    artilharia: []
    
  }

  componentDidMount(){
    Apiresponse.getClassificationTable(2).then(result =>{
      const {data} = result
      this.setState({
        time: data
      })
    })

    Apiresponse.getNextGames(2).then(result =>{
      const {data} = result
      console.log(data)
      this.setState({
        rodada: [data]
      })
    })

    Apiresponse.getArtilheiro(2).then(result =>{
      const {data} = result
        this.setState({
        artilharia: data
      })
    })
  }
        
      

  renderTableData= (option) =>{
    return this.state[option].map((element) =>{
      return(
        <tr key={element.time.time_id}>
          <td>{element.posicao}</td>
          <td><img width='23px' src={element.time.escudo} alt =''/></td>
          <td>{element.time.nome_popular}</td>
          <td>{element.pontos}</td>
          <td>{element.ultimos_jogos.map((result, index)=> 
          result === 'v'? <span key={index} className="win">●</span> : result === 'e' ? <span key={index} className="draw">●</span>: <span key={index} className="lose">●</span>)}</td>
        </tr>
      )
    })
  }

  renderTableNextGames = () => {
    return this.state.rodada.map((element) => {
      return (
        <tr key={element.partidas[0].partida_id}>
          <td><img width='23px' src={element.partidas[0].time_mandante.escudo} alt =''/></td>
          <td>{element.partidas[0].placar_mandante}</td>
          <td>x</td>
          <td>{element.partidas[0].placar_visitante}</td>
          <td><img width='23px' src={element.partidas[0].time_visitante.escudo} alt =''/></td>
        </tr>
      )
    })
  }

  renderTableHeader = (headerNames = [] ) => {
    return headerNames.map((element,index) => {
      return <th key={index}>{element}</th>
    })
  }

  renderTableTopScore = () => {
    return this.state.artilharia.map((element, index) =>{
      return(
        <tr key={element.atleta.atleta_id}>
          <td>{index+1}</td>
          <td><img width='23px' src={element.time.escudo} alt=''/></td>
          <td>{element.atleta.nome_popular}</td>
          <td>{element.gols}</td>
        </tr>
      )
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
                <tr>{this.renderTableHeader(['#', '', 'CLUBE', 'PONTOS', 'RECENTES'])}</tr>
                  {this.renderTableData('time')}
                </tbody>
              </table>
          </div>

          <div>
            <h2 id='title'>Próxima Rodada</h2>
              <table id='clubs'>
                <tbody>
                <tr>{this.renderTableHeader(['MANDANTE', 'GOLS', '', 'GOLS', 'VISITANTE'])}</tr>
                  {this.renderTableNextGames()}
                </tbody>
              </table>
          </div>

          <div>
            <h2 id='title'>Artilharia</h2>
            <table id='clubs'>
            <tbody>
                <tr>{this.renderTableHeader(['#','TIME', 'NOME', 'GOLS' ])}</tr>
                  {this.renderTableTopScore()}
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


 