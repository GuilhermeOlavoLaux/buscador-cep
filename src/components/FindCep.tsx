import { ChangeEvent, useState, useEffect } from 'react'
import { api } from '../api/apiRoutes'
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
  const navigate = useNavigate()

  async function fetchCep() {
    console.log(fields)
    const cepRequest = await api.get(`${fields.uf}/${fields.city}/${fields.street}/json/`)
    if (cepRequest) {
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

  function renderUfOptions() {
    const ufs = [
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

  return (
    <>
      <div className='find-cep-container'>
        <Header />
        <Breadcrumb>
          <Breadcrumb.Item href='/'>Início</Breadcrumb.Item>
          <Breadcrumb.Item active>Buscar CEP</Breadcrumb.Item>
        </Breadcrumb>

        <div className='inputs-container'>
          <input
            type='text'
            placeholder='Município'
            value={fields.city}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFields({ ...fields, city: event.target.value })
            }
          />

          <input
            type='text'
            placeholder='Rua'
            value={fields.street}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setFields({ ...fields, street: event.target.value })
            }
          />

          <Form.Group controlId='formBasicSelect'>
            <Form.Label>Select Norm Type</Form.Label>
            <Form.Control
              as='select'
              onChange={(event) => {
                setFields({ ...fields, uf: event.target.value })
              }}
            >
              {renderUfOptions()}
            </Form.Control>
          </Form.Group>
        </div>
        <button className='buttonStyle' onClick={() => navigate(-1)}>
          Voltar
        </button>
        <button onClick={() => fetchCep()} className='buttonStyle'>
          teste
        </button>
      </div>

      <Footer></Footer>
    </>
  )
}
