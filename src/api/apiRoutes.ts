import axios from 'axios'

const findCep = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

const districtsByUF = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
})

export { findCep, districtsByUF }