import axios from 'axios'

class Apiresponse {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.api-futebol.com.br/v1',
      headers: {
      'Authorization': `Bearer test_cd742736980799740abf5ccaa74d2e`
      }
    })
  }

  getClassificationTable = (id) => {
    return this.api.get(`/campeonatos/${id}/tabela`)

  }

  getNextGames = (id) => {
    return this.api.get(`/campeonatos/${id}/rodadas/rodada`)
  }

  getArtilheiro = (id) => {
    return this.api.get(`/campeonatos/${id}/artilharia`)
  }

  getNextGames = (id) => {
    return this.api.get(`/times/${id}/partidas/proximas`) // Pertence ao componente NextGame.js
  }

  getNextRounds = (id,rodada) => {
    return this.api.get(`campeonatos/${id}/rodadas/${rodada}`) // Pertence ao componente ViewTableBrasileirao.js
  }

  getRound = (id) => {
    return this.api.get(`campeonatos/${id}`)
  }
}

export default new Apiresponse()