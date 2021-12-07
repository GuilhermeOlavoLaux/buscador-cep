export default function Footer() {
  const now = new Date()
  return (
    <>
      <div className='year'>
        <hr />
        <p>{now.getFullYear()} - BuscadorCEP! </p>
      </div>
    </>
  )
}
