import React, { Component } from 'react';
import Header from './Header';
import UnderHeaderImg from './UnderHeaderImg';
import './tablesStyled.css';
import Apiresponse from '../Api/Apiresponse';
import { Switch, Route, Link, Router } from "react-router-dom";




class ViewTableCopaBrasil extends Component {
    state = {
        time: [],
        artilharia: [],
        rodada: [],
        rodadaAtual: 0,
    }

    componentDidMount() {
        Apiresponse.getArtilheiro(2).then(result => {
            const { data } = result
            this.setState({
                artilharia: data.slice(0, 10)
            })
        })

        Apiresponse.getNextRounds(2, this.rodadaAtual).then(result => {
            const { data } = result
            this.setState({
                rodada: [data]
            })
        })

        Apiresponse.getRound(2).then(result => {
            const currentRound = result.data.rodada_atual.rodada
            console.log(currentRound)
            this.setState({
                rodadaAtual: currentRound
            })
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
                    <td><img width='23px' src={element.time.escudo} /></td>
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
                    <td><img width='23px' src={element.partidas[0].time_mandante.escudo} alt='' /></td>
                    <td>{element.partidas[0].placar_mandante}</td>
                    <td>x</td>
                    <td>{element.partidas[0].placar_visitante}</td>
                    <td><img width='23px' src={element.partidas[0].time_visitante.escudo} alt='' /></td>
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
                        <div className=' w-100 d-flex justify-content-evenly'>

                            <div>
                                <h2 id='title'>Próxima Rodada</h2>
                                <table id='clubs'>
                                    <tbody>
                                        <tr>{this.renderTableHeader(['MANDANTE', 'GOLS', '', 'GOLS', 'VISITANTE'])}</tr>
                                        {this.renderTableNextRounds()}
                                    </tbody>
                                </table>
                            </div>



                            <div>
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
