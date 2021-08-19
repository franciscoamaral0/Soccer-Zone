import React, { Component } from 'react';
import Header from './Header';
import UnderHeaderImg from './UnderHeaderImg';
import './tablesStyled.css';
import Apiresponse from '../Api/Apiresponse';


class ViewTableCopaBrasil extends Component {
  state = {
    time: [],
    artilharia: [],
    rodada: [],
  }

  componentDidMount = async () => {
    const { data: getArtilheiro } = await Apiresponse.getArtilheiro(2)
    const { data: getRound } = await Apiresponse.getRound(2)
    const { data: getNextStep } = await Apiresponse.getNextStep(2, getRound.fase_atual.fase_id)
    this.setState({
      time: [],
      artilharia: getArtilheiro.slice(0, 10),
      rodada: getNextStep.chaves,
    })
  }




  renderTableHeader = (headerNames = []) => {
    return headerNames.map((element, index) => {
      return <th key={index}>{element}</th>
    })
  }

  renderTableTopScore = () => {
    return this.state.artilharia.map((element, index) => {
      return (
        <tr key={element.atleta.atleta_id}>
          <td>{index + 1}</td>
          <td><img width='35px' src={element.time.escudo} /></td>
          <td>{element.atleta.nome_popular}</td>
          <td>{element.gols}</td>
        </tr>
      )
    })
  }


  renderTableNextRounds = () => {
    return this.state.rodada.map((element) => {
      console.log(element)


      return (
        <tr key={element.fase_id}>
          <td><img width='35px' src={element.partida_ida.time_mandante.escudo} alt={element.partida_ida.time_mandante.nome_popular} /></td>
          <td>{element.partida_ida.time_mandante.nome_popular}</td>
          <td>{element.partida_ida.placar_mandante}</td>
          <td>x</td>
          <td>{element.partida_ida.placar_visitante}</td>
          <td>{element.partida_ida.time_visitante.nome_popular}</td>
          <td><img width='35px' src={element.partida_ida.time_visitante.escudo} alt={element.partida_ida.time_visitante.nome_popular} /></td>
          <td>{element.partida_ida.data_realizacao} - {element.partida_ida.hora_realizacao}</td>
        </tr>
      )
    })
  }

  renderTableNextRoundsReturnGame = () => {
    return this.state.rodada.map((element) => {
      console.log(element)


      return (
        <tr key={element.fase_id}>
          <td><img width='35px' src={element.partida_volta.time_mandante.escudo} alt={element.partida_volta.time_mandante.nome_popular} /></td>
          <td>{element.partida_volta.time_mandante.nome_popular}</td>
          <td>{element.partida_volta.placar_mandante}</td>
          <td>x</td>
          <td>{element.partida_volta.placar_visitante}</td>
          <td>{element.partida_volta.time_visitante.nome_popular}</td>
          <td><img width='35px' src={element.partida_volta.time_visitante.escudo} alt={element.partida_volta.time_visitante.nome_popular} /></td>
          <td><td>{element.partida_volta.data_realizacao} -  {element.partida_volta.hora_realizacao}</td></td>
        </tr>
      )
    })
  }


  render() {
    return (
      <>
        <Header />
        <UnderHeaderImg children='Copa do Brasil' />
        <div style={{ backgroundImage: `url("https://i.pinimg.com/originals/81/b2/07/81b20736e3201de30766c8b5ba69673b.jpg")` }} className='  p-5'>
          <div className='shadow-sm p-5 bg-body rounded d-flex  align-self-baseline '>
            <div style={{ fontSize: '1.4vw' }} className=' w-100 d-flex justify-content-evenly flex-wrap'>

              <div >
                <h2 id='title'>Próxima Fase - Jogo Ida</h2>
                <table id='clubs'>
                  <tbody>
                    <tr>{this.renderTableHeader(['#', 'MANDANTE', 'GOLS', '', 'GOLS', 'VISITANTE', '#', 'Data Prevista'])}</tr>
                    {this.renderTableNextRounds()}
                  </tbody>
                </table>

                <h2 className='mt-5' id='title'>Próxima Fase - Jogo Volta</h2>
                <table id='clubs'>
                  <tbody>
                    <tr>{this.renderTableHeader(['#', 'MANDANTE', 'GOLS', '', 'GOLS', 'VISITANTE', '#', 'Data Prevista'])}</tr>
                    {this.renderTableNextRoundsReturnGame()}
                  </tbody>
                </table>
              </div>



              <div className='pt-5'>
                <h2 id='title'>Artilharia</h2>
                <table id='clubs'>
                  <tbody>
                    <tr>{this.renderTableHeader(['#', 'TIME', 'NOME', 'GOLS'])}</tr>
                    {this.renderTableTopScore()}
                  </tbody>
                </table>
              </div>






            </div>
          </div>
        </div>

      </>
    )
  }
}

export default ViewTableCopaBrasil
