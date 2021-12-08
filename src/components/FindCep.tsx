import { ChangeEvent, useState, useEffect } from 'react'
import { findCep, districtsByUF } from '../api/apiRoutes'
import Header from './Header'
import { Breadcrumb, Form } from 'react-bootstrap'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

interface IFields {
  uf: string
  city: string
  street: string
  neighborhood: string
  cep: string
}

export default function RenderCep() {
  const [fields, setFields] = useState({} as IFields)
  const [cities, setCities] = useState([])
  const navigate = useNavigate()

  async function fetchCep() {
    const cepRequest = await findCep.get(`${fields.uf}/${fields.city}/${fields.street}/json/`)
    if (cepRequest.data.length !== 0) {
      setFields({
        uf: cepRequest.data[0].uf,
        city: cepRequest.data[0].localidade,
        street: cepRequest.data[0].logradouro,
        neighborhood: cepRequest.data[0].bairro,
        cep: cepRequest.data[0].cep
      })

      window.alert(`
        CEP: ${cepRequest.data[0].cep}
        Município: ${cepRequest.data[0].localidade}
        Logradouro: ${cepRequest.data[0].logradouro}
        Bairro: ${cepRequest.data[0].bairro}`)
    }
  }

  async function fetchCities(uf: string) {
    const citiesRequest = await districtsByUF.get(`${uf}/municipios`)

    if (citiesRequest) {
      const citiesFounded = citiesRequest.data.map((element: any) => {
        return element.nome
      })
      setCities(citiesFounded)
    }
  }

  function renderCitiesOptions() {
    if (cities) {
      return cities.map((city: any) => {
        return (
          <>
            <option value={city}>{city}</option>
          </>
        )
      })
    }
  }

  function renderUfOptions() {
    const ufs = [
      'Selecionar Uf:',
      'RO',
      'AC',
      'AM',
      'RR',
      'PA',
      'AP',
      'TO',
      'MA',
      'PI',
      'CE',
      'RN',
      'PB',
      'PE',
      'AL',
      'SE',
      'BA',
      'MG',
      'ES',
      'RJ',
      'SP',
      'PR',
      'SC',
      'RS',
      'MS',
      'MT',
      'GO',
      'DF'
    ]
    return ufs.map((Uf) => {
      return (
        <>
          <option value={Uf}>{Uf}</option>
        </>
      )
    })
  }

  function formDisabled() {
    console.log('aaa')
    if (!fields.uf) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
      <div className='find-cep-container'>
        <Header />
        <Breadcrumb>
          <Breadcrumb.Item href='/'>Início</Breadcrumb.Item>
          <Breadcrumb.Item active>Buscar CEP</Breadcrumb.Item>
        </Breadcrumb>

        <Form.Group controlId='formBasicSelect' className='bootstrap-field'>
          <Form.Control
            as='select'
            onChange={(event) => {
              setFields({ ...fields, uf: event.target.value })
              fetchCities(event.target.value)
            }}
          >
            {renderUfOptions()}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='formBasicSelect' className='bootstrap-field'>
          <Form.Control
            disabled={formDisabled()}
            as='select'
            onChange={(event) => {
              setFields({ ...fields, city: event.target.value })
            }}
          >
            <option>Município:</option>
            {renderCitiesOptions()}
          </Form.Control>
        </Form.Group>

        <div className='inputs-container'>
          <input
            type='text'
            placeholder='Rua'
            value={fields.street}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFields({ ...fields, street: event.target.value })
            }
          />
        </div>
        <button className='buttonStyle' onClick={() => navigate(-1)}>
          Voltar
        </button>
        <button onClick={() => fetchCep()} className='buttonStyle'>
          Buscar
        </button>
      </div>

      <Footer></Footer>
    </>
  )
}
