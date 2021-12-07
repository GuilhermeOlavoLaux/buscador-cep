import { useNavigate } from 'react-router-dom'


export default function Header() {

  const navigate = useNavigate()

  return (
    <>
      <div className='header-container'>

        <h1>BuscadorCEP!</h1>

        <div className='nav-container'>
          <p onClick={() => navigate(`/findAdress`)}>Buscar Endereço</p>
          <p onClick={() => navigate(`/findCep`)}>Buscar CEP</p>
        </div>
        <hr />
      </div>
    </>
  )
}
