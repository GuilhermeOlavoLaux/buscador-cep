import { ChangeEvent, useState, useEffect } from 'react'
import { api } from '../api/apiRoutes'
import Header from './Header'
import { Breadcrumb } from 'react-bootstrap'

interface IFields {
  uf: string
  city: string
  street: string
  neighborhood: string
  cep: string
}

export default function RenderCep() {
  const [fields, setFields] = useState({} as IFields)

  async function fetchCep() {
    const cepRequest = await api.get(`${fields.uf}/${fields.city}/${fields.street}/json/`)
    if (cepRequest) {
      setFields({
        uf: cepRequest.data[0].uf,
        city: cepRequest.data[0].localidade,
        street: cepRequest.data[0].logradouro,
        neighborhood: cepRequest.data[0].bairro,
        cep: cepRequest.data[0].cep
      })
    }
  }

  // setFields({ uf: '', city: '', street: '', neighborhood: '', cep: '' })

  useEffect(() => {
    fetchCep()
  }, [])

  function mostrar() {
    fetchCep()
    window.alert(`
    CEP: ${fields.cep}
    Município: ${fields.city}
    Logradouro: ${fields.street}
    Bairro: ${fields.neighborhood}`)
  }

  return (
    <>
      <Header />
      <Breadcrumb>
        <Breadcrumb.Item href='/home'>Início</Breadcrumb.Item>
        <Breadcrumb.Item active>Buscar CEP</Breadcrumb.Item>
      </Breadcrumb>

      <div className='inputs-container'>
        <input
          type='text'
          placeholder='UF'
          value={fields.uf}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setFields({ ...fields, uf: event.target.value })
          }
        />

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
      </div>
      <button>Voltar</button>
      <button onClick={() => fetchCep()}>teste</button>
      <button onClick={() => mostrar()}>mostrar</button>
    </>
  )
}
