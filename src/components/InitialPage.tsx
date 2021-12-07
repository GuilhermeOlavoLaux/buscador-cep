import Header from './Header'
import Footer from './Footer'

export default function InitialPage() {
  return (
    <>
      <Header />
      <article>
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

        <button>Bucar Endereço</button>

        <button>Bucar CEP</button>
      </article>

      <Footer></Footer>
    </>
  )
}
