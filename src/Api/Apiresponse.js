import axios from 'axios'

class Apiresponse {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.api-futebol.com.br/v1',
      headers: {
        'Authorization': 'Bearer test_cd742736980799740abf5ccaa74d2e'
      }
    })
  }

  getClassificationTable = (id) => {
    return this.api.get(`/campeonatos/${id}/tabela`)

  }

  getArtilheiro = (id) => {
    return this.api.get(`/campeonatos/${id}/artilharia`)
  }
}

export default new Apiresponse()