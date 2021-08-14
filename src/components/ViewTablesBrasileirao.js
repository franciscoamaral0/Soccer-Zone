import React, { Component } from 'react';
import Header from './Header';
import UnderHeaderImg from './UnderHeaderImg';
import './tablesStyled.css';
import Apiresponse from '../Api/Apiresponse';
import { ThreeSixty } from '@material-ui/icons';
import {Switch,  Route, Link, Router } from "react-router-dom";


class ViewTablesBrasileirao extends Component {
  state = {  
    time :[],
    artilharia: [],
    rodada: [],
    rodadaAtual: 0,
    
  }

  componentDidMount(){
    Apiresponse.getClassificationTable(10).then(result =>{
      const {data} = result
      this.setState({
        time: data
      })
    })

    Apiresponse.getArtilheiro(10).then(result =>{
      const {data} = result
        this.setState({
        artilharia: data.slice(0,3)
      })
    })

    Apiresponse.getNextRounds(10, this.rodadaAtual).then(result =>{
      const {data} = result
        this.setState({
        rodada: [data]
      })
    })
    
    Apiresponse.getRound(10).then(result =>{
      const currentRound = result.data.rodada_atual.rodada
      console.log(currentRound)
        this.setState({
        rodadaAtual: currentRound
      })
    })
  }
        
     

  renderTableData= (option) =>{
    return this.state[option].map((element) =>{
      return(
        <tr key={element.time.time_id}>
        
            <td>{element.posicao}</td>
            <td><Link to={`/brasileirao/${element.time.time_id}`}><img width='23px' src={element.time.escudo} alt={element.time.nome_popular}/> </Link></td>
            <td><Link className='text-decoration-none' to={`/brasileirao/${element.time.time_id}`}>{element.time.nome_popular}</Link></td>
            <td>{element.pontos}</td>
            <td>{element.ultimos_jogos.map((result, index)=> 
            result === 'v'? <span key={index} className="win">●</span> : result === 'e' ? <span key={index} className="draw">●</span>: <span key={index} className="lose">●</span>)}</td>
        
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
          <td><img width='23px' src={element.time.escudo} alt ={element.time.nome_popular}/></td>
          <td>{element.atleta.nome_popular}</td>
          <td>{element.gols}</td>
        </tr>
      )
    })
    
  }

  renderTableNextRounds = () => {
    return this.state.rodada.map((element) => {
      return (
        <tr key={element.partidas[0].partida_id}>
          <td><img width='23px' src={element.partidas[0].time_mandante.escudo} alt ={element.partidas[0].time_mandante.nome_popular}/></td>
          <td>{element.partidas[0].placar_mandante}</td>
          <td>x</td>
          <td>{element.partidas[0].placar_visitante}</td>
          <td><img width='23px' src={element.partidas[0].time_visitante.escudo} alt ={element.partidas[0].time_visitante.nome_popular}/></td>
        </tr>
      )
    })
  }
  


    
  render() { 
    {console.log(this.state.rodadaAtual)} 
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
            <h2 id='title'>Artilharia</h2>
            <table id='clubs'>
            <tbody>
                <tr>{this.renderTableHeader(['#','TIME', 'NOME', 'GOLS' ])}</tr>
                  {this.renderTableTopScore()}
                </tbody>
              </table>
          </div>

          <div>
            <h2 id='title'>Próxima Rodada</h2>
              <table id='clubs'>
                <tbody>
                <tr>{this.renderTableHeader(['MANDANTE', 'GOLS', '', 'GOLS', 'VISITANTE'])}</tr>
                  {this.renderTableNextRounds()}
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
 
export default ViewTablesBrasileirao ;


 