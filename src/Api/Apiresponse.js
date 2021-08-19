import axios from 'axios'
const key = process.env.REACT_APP_SOCCERZONE;
class Apiresponse {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.api-futebol.com.br/v1',
      headers: {
        'Authorization': `Bearer ${key}`
      }
    })
  }

  getClassificationTable = (id) => {
    return this.api.get(`/campeonatos/${id}/tabela`)

  }

  getArtilheiro = (id) => {
    return this.api.get(`/campeonatos/${id}/artilharia`)
  }

  getNextGames = (id) => {
    return this.api.get(`/times/${id}/partidas/proximas`) 
  }

  getNextRounds = (id,rodada) => {
    return this.api.get(`campeonatos/${id}/rodadas/${rodada}`) 
  }

  getRound = (id) => {
    return this.api.get(`campeonatos/${id}`)
  }

  getNextStep = (id,fase) => {
    return this.api.get(`campeonatos/${id}/fases/${fase}`)
  }
}

export default new Apiresponse()