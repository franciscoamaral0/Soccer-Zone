import axios from 'axios'

class Apiresponse {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.api-futebol.com.br/v1',
      headers: {
        'Authorization': 'Bearer Bearer live_3a61e9218300fdd814e9514d4770b7'
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
}

export default new Apiresponse()