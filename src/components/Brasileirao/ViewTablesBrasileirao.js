import React, { Component } from 'react';
import Header from '../Header-Home/Header';
import UnderHeaderImg from '../Header-Home/UnderHeaderImg';
import Apiresponse from '../../Api/Apiresponse';
import {Link, } from "react-router-dom";
import {Table, CheckColor} from '../Styles/tableStyled'
import TableLoader from '../ReactContentLoader/ReactLoader';


class ViewTablesBrasileirao extends Component {
  state = {
    time: [],
    artilharia: [],
    rodada: [],
    loading: false
  }



  componentDidMount = async () => {
    try{
      this.setState({
        loading: true
      })
      const { data: getClassificationTable } = await Apiresponse.getClassificationTable(10)
      const { data: getArtilheiro } = await Apiresponse.getArtilheiro(10)
      const { data: getRounds } = await Apiresponse.getRound(10)
      const { data: getNextRounds } = await Apiresponse.getNextRounds(10, getRounds.rodada_atual.rodada)
      
      this.setState({
        time: getClassificationTable,
        artilharia: getArtilheiro.slice(0,10),
        rodada: getNextRounds.partidas,
      })

    } catch(error) {
        console.error(error)
      } finally {
        this.setState({
          loading: false
        })
      }
      
      
  }


  renderTableData = () => {
    return this.state.time.map((element) => {
      return (
        <tr key={element.time.time_id}>
          <td>{element.posicao}</td>
          <td><Link to={`/brasileirao/${element.time.time_id}`}><img src={element.time.escudo} alt={element.time.nome_popular}/> </Link></td>
          <td><Link className='text-decoration-none' to={`/brasileirao/${element.time.time_id}`}>{element.time.nome_popular}</Link></td>
          <td>{element.pontos}</td>
          <td>{element.ultimos_jogos.map((result, index) =>
            <CheckColor key={index} result={result}>●</CheckColor>)}</td>
        </tr>
      )
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
          <td><img width='35px' src={element.time.escudo} alt={element.atleta.nome_popular}/></td>
          <td>{element.atleta.nome_popular}</td>
          <td>{element.gols}</td>
        </tr>
      )
    })
  }



  renderTableNextRounds = () => {
    return this.state.rodada.map((element) => {
      return (
        <tr key={element.partida_id}>
          <td><img width='35px' src={element.time_mandante.escudo} alt={element.time_mandante.nome_popular} /></td>
          <td>{element.placar_mandante}</td>
          <td>x</td>
          <td>{element.placar_visitante}</td>
          <td><img width='35px' src={element.time_visitante.escudo} alt={element.time_visitante.nome_popular} /></td>
          <td>{element.data_realizacao} - {element.hora_realizacao}</td>
        </tr>
      )
    })
  }

  

  render() {
    return (
      <>
        <Header />
        <UnderHeaderImg children='Brasileirão' />
        <div style={{ backgroundImage: `url("https://i.pinimg.com/originals/81/b2/07/81b20736e3201de30766c8b5ba69673b.jpg")` }} className='  p-5'>
          <div className='shadow-sm p-5 bg-body rounded d-flex  align-self-baseline '>
            <div  className='  w-100 d-flex justify-content-evenly flex-wrap '>
              <div className= ' pb-5 text-center'>
                <h2 id='title'>Classificação</h2>
            {this.state.loading ? <TableLoader width={400} height={220}/> : 
                <Table> 
                  <tbody>
                    <tr>{this.renderTableHeader(['#', '', 'CLUBE', 'PONTOS', 'RECENTES'])}</tr>
                    {this.renderTableData('time')}
                  </tbody>
                  </Table>}
              </div>
              
              <div className= 'pb-5 text-center'>
                <h2 id='title'>Próxima Rodada</h2>
              {this.state.loading ? <TableLoader width={400} height={220}/> : 
                <Table>
                  <tbody>
                    <tr>{this.renderTableHeader(['MANDANTE', 'GOLS', '', 'GOLS', 'VISITANTE', 'DATA PREVISTA'])}</tr>
                    {this.renderTableNextRounds()}
                  </tbody>
                </Table>}
              </div>
              
              
              <div className= 'pb-5 text-center'>
                <h2 id='title'>Artilharia</h2>
              {this.state.loading ? <TableLoader width={400} height={220}/> : 
                <Table>
                  <tbody>
                    <tr>{this.renderTableHeader(['#', 'TIME', 'NOME', 'GOLS'])}</tr>
                    {this.renderTableTopScore()}
                  </tbody>
                </Table>}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}



export default ViewTablesBrasileirao;





















