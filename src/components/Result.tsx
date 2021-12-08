import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { findCep } from '../api/apiRoutes'
import { Breadcrumb } from 'react-bootstrap'

import Header from './Header'
import Footer from './Footer'

interface IFields {
  cep: string
  uf: string
  city: string
  street: string
  neighborhood: string
}

export default function Result() {
  const [fields, setFields] = useState({} as IFields)
  const [loading, setLoading] = useState(false)

  const params = useParams()
  const navigate = useNavigate()

  async function fetchAdress() {
    const { data } = await findCep.get(`/${params.cep}/json/`)
    setLoading(true)
    if (data) {
      setFields({
        ...fields,
        uf: data.uf,
        city: data.localidade,
        street: data.logradouro,
        neighborhood: data.bairro
      })
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAdress()
  }, [])

  function validation() {
    if (fields.city !== undefined && fields.uf !== undefined && fields.street !== undefined) {
      return (
        <>
          <div className='adress-container'>
            <h5>Logradouro</h5>
            <p>{fields.street}</p>
            <h5>UF</h5>
            <p>{fields.uf}</p>
            <h5>Bairro</h5>
            <p>{fields.neighborhood}</p>
            <h5>Cidade</h5>
            <p>{fields.city}</p>
            <h5>Cep</h5>
            <p>{params.cep}</p>
          </div>

          <div className='buttons-container'>
            <button onClick={() => navigate('/findAdress')} className='buttonStyle'>
              Nova Busca
            </button>
            <button onClick={() => window.print()} className='buttonStyle'>
              Imprimir
            </button>
          </div>
        </>
      )
    } else {
      const variavel = loading ? <h1>O CEP digitado não existe, tente novamente</h1> : <p> </p>;

      return variavel
    }
  }

  return (
    <>
      <Header></Header>

      <div className='result-container'>
        <Breadcrumb>
          <Breadcrumb.Item href='/'>Início</Breadcrumb.Item>
          <Breadcrumb.Item href='/findAdress'>Buscar Endereço</Breadcrumb.Item>
          <Breadcrumb.Item active>CEP {params.cep}</Breadcrumb.Item>
        </Breadcrumb>

        {validation()}
      </div>
      <Footer></Footer>
    </>
  )
}
