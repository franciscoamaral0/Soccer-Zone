import React, { Component } from 'react';
import Apiresponse from '../Api/Apiresponse';
import Header from './Header';
import UnderHeaderImg from './UnderHeaderImg';


class Nextgame extends Component {
  state = {  
    nextGames: []
  }

  componentDidMount(){
    let id = this.props.match.params.code
    Apiresponse.getNextGames(id).then(games =>{
      const jogos = games.data['campeonato-brasileiro']
      console.log(jogos)
      this.setState({
        nextGames: jogos
      })
    })
  }

  renderTableHeader = (headerNames = [] ) => {
    return headerNames.map((element,index) => {
      return <th key={index}>{element}</th>
    })
  }

  renderTableNextGames = () => {
    return this.state.nextGames.map((element) => {
      return (
        <tr key={element.partida_id}>
          <td><img width='23px' src={element.time_mandante.escudo} alt =''/></td>
          <td>{element.time_mandante.nome_popular}</td>
          <td>X</td>
          <td>{element.time_visitante.nome_popular}</td>
          <td><img width='23px' src={element.time_visitante.escudo} alt =''/></td>
          <td>{element.data_realizacao}</td>
        </tr>
      )
    })
  }




  render() { 
   
    return (
      <>
      <Header/>
        <UnderHeaderImg children='Proximas Partidas'/> 
          <div style={{backgroundImage: `url("https://i.pinimg.com/originals/81/b2/07/81b20736e3201de30766c8b5ba69673b.jpg")`}} className='  p-5'>
            <div className='shadow-sm p-5 bg-body rounded d-flex  align-self-baseline '>
              <div className=' w-100 d-flex justify-content-center'>
                <div>
                  <h2 id='title'>Proximas Partidas</h2>
                    <table id='clubs'>
                      <tbody>
                        <tr>{this.renderTableHeader(['#', 'TIME', 'X', 'TIME', '#', 'DATA PREVISTA'])}</tr>
                          {this.renderTableNextGames()}
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
 
export default Nextgame;