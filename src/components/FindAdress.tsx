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

      <Breadcrumb>
        <Breadcrumb.Item href='/home'>Início</Breadcrumb.Item>
        <Breadcrumb.Item active>Buscar Endereço</Breadcrumb.Item>
      </Breadcrumb>

      <p>CEP * 94075-300</p>
      <div className='inputs-container'>
        <input
          type='text'
          placeholder='CEP'
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleCepChange(event.target.value)}
        />

        <button>Voltar</button>

        <button onClick={() => handleFindClick(cep)}>Buscar</button>
      </div>

      <Footer></Footer>
    </>
  )
}
