import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Breadcrumb } from 'react-bootstrap'

import Header from './Header'
import Footer from './Footer'

export default function FindAdress() {
  const [cep, setCep] = useState('')

  const navigate = useNavigate()

  function handleCepChange(cep: string) {
    setCep(cep)
  }

  const handleFindClick = (cep: string) => {
    navigate(`/result/${cep}`)
  }

  return (
    <>
      <Header></Header>
      <div className='find-adress-container'>
        <Breadcrumb>
          <Breadcrumb.Item href='/'>Início</Breadcrumb.Item>
          <Breadcrumb.Item active>Buscar Endereço</Breadcrumb.Item>
        </Breadcrumb>

        <p>CEP *</p>
        <div className='inputs-container'>
          <input
            type='text'
            placeholder='CEP'
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleCepChange(event.target.value)}
          />
        </div>

        <button onClick={() => navigate(-1)} className='buttonStyle'>
          Voltar
        </button>
        <button onClick={() => handleFindClick(cep)} className='buttonStyle'>
          Buscar
        </button>
      </div>
      <Footer></Footer>
    </>
  )
}
