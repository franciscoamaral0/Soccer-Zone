import React, { Component } from "react";
import Header from "../Header-Home/Header";
import UnderHeaderImg from "../Header-Home/UnderHeaderImg";
import Apiresponse from "../../Api/Apiresponse";
import { TableViews } from "../Styles/tableStyled";
import TableLoader from '../ReactContentLoader/ReactLoader';
import { Container } from "../Styles/homeStyled";

class ViewTableCopaBrasil extends Component {
  state = {
    time: [],
    artilharia: [],
    rodada: [],
    loading:[]
  };

  componentDidMount = async () => {
    try {
      this.setState({
        loading:true
      })
      const { data: getArtilheiro } = await Apiresponse.getArtilheiro(2);
      const { data: getRound } = await Apiresponse.getRound(2);
      const { data: getNextStep } = await Apiresponse.getNextStep(
        2,
        getRound.fase_atual.fase_id
      );
      this.setState({
        time: [],
        artilharia: getArtilheiro.slice(0, 10),
        rodada: getNextStep.chaves,
      });
    } catch (error) {
      console.error(error);
    } finally{
      this.setState({
        loading: false
      })
    }
  };

  renderTableHeader = (headerNames = []) => {
    return headerNames.map((element, index) => {
      return <th key={index}>{element}</th>;
    });
  };

  renderTableTopScore = () => {
    return this.state.artilharia.map((element, index) => {
      return (
        <tr key={element.atleta.atleta_id}>
          <td>{index + 1}</td>
          <td>
            <img
              width="35px"
              src={element.time.escudo}
              alt={element.atleta.nome_popular}
            />
          </td>
          <td>{element.atleta.nome_popular}</td>
          <td>{element.gols}</td>
        </tr>
      );
    });
  };

  renderTableNextRounds = () => {
    return this.state.rodada.map((element) => {
      

      return (
        <tr key={element.fase_id}>
          <td>
            <img
              width="35px"
              src={element.partida_ida.time_mandante.escudo}
              alt={element.partida_ida.time_mandante.nome_popular}
            />
          </td>
          <td>{element.partida_ida.time_mandante.nome_popular}</td>
          <td>{element.partida_ida.placar_mandante}</td>
          <td>x</td>
          <td>{element.partida_ida.placar_visitante}</td>
          <td>{element.partida_ida.time_visitante.nome_popular}</td>
          <td>
            <img
              width="35px"
              src={element.partida_ida.time_visitante.escudo}
              alt={element.partida_ida.time_visitante.nome_popular}
            />
          </td>
          <td>
            {element.partida_ida.data_realizacao} -{" "}
            {element.partida_ida.hora_realizacao}
          </td>
        </tr>
      );
    });
  };

  renderTableNextRoundsReturnGame = () => {
    return this.state.rodada.map((element) => {
      console.log(element);

      return (
        <tr key={element.fase_id}>
          <td>
            <img
              width="35px"
              src={element.partida_volta.time_mandante.escudo}
              alt={element.partida_volta.time_mandante.nome_popular}
            />
          </td>
          <td>{element.partida_volta.time_mandante.nome_popular}</td>
          <td>{element.partida_volta.placar_mandante}</td>
          <td>x</td>
          <td>{element.partida_volta.placar_visitante}</td>
          <td>{element.partida_volta.time_visitante.nome_popular}</td>
          <td>
            <img
              width="35px"
              src={element.partida_volta.time_visitante.escudo}
              alt={element.partida_volta.time_visitante.nome_popular}
            />
          </td>
          <td>
            <td>
              {element.partida_volta.data_realizacao} -{" "}
              {element.partida_volta.hora_realizacao}
            </td>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <>
        <Header />
        <UnderHeaderImg children="Copa do Brasil" />
        <Container>
          <div className="shadow-sm p-5 bg-body rounded d-flex  align-self-baseline">
            <div className="w-100 d-flex justify-content-evenly flex-wrap">
              <div className=' text-center'>
                <h2 id="title">Próxima Fase - Jogo Ida</h2>
                {this.state.loading ? <TableLoader width={400} height={220}/> :
                  <TableViews>
                    <tbody>
                      <tr>
                        {this.renderTableHeader([
                          "#",
                          "MANDANTE",
                          "GOLS",
                          "",
                          "GOLS",
                          "VISITANTE",
                          "#",
                          "Data Prevista",
                        ])}
                      </tr>
                      {this.renderTableNextRounds()}
                    </tbody>
                  </TableViews>}
                  
                <h2 className="mt-5" id="title">
                  Próxima Fase - Jogo Volta
                </h2>
                {this.state.loading ? <TableLoader width={400} height={220}/> :
                  <TableViews>
                    <tbody>
                      <tr>
                        {this.renderTableHeader([
                          "#",
                          "MANDANTE",
                          "GOLS",
                          "",
                          "GOLS",
                          "VISITANTE",
                          "#",
                          "Data Prevista",
                        ])}
                      </tr>
                      {this.renderTableNextRoundsReturnGame()}
                    </tbody>
                  </TableViews>}
              
              </div>

              <div className=" pt-5 text-center">
                <h2 id="title">Artilharia</h2>
                {this.state.loading ? <TableLoader width={400} height={220}/> :
                <TableViews>
                  <tbody>
                    <tr>
                      {this.renderTableHeader(["#", "TIME", "NOME", "GOLS"])}
                    </tr>
                    {this.renderTableTopScore()}
                  </tbody>
                </TableViews>}
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default ViewTableCopaBrasil;
