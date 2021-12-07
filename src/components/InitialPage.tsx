import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

export default function InitialPage() {
  const navigate = useNavigate()

  return (
    <>
      <Header />

      <article className='home-container'>
        <h1>Bem vindo ao BuscadorCEP!</h1>

        <p>
          O aplicativo BuscadorCEP! permite que você encontre códigos de endereçamento postais
          (CEP).{' '}
        </p>

        <p>
          Se você já tiver o CEO em mãos e gostaria de buscar seu endereço, o BuscadorCEP! Também
          vai te ajudar.
        </p>

        <p>Aproveite! 😊</p>

        <div className='buttons-container'>
          <button onClick={() => navigate(`/findAdress`)} className='buttonStyle'>
            Bucar Endereço
          </button>

          <button onClick={() => navigate(`/findCep`)} className='buttonStyle'>
            Bucar CEP
          </button>
        </div>
      </article>

      <Footer></Footer>
    </>
  )
}
