export default function Footer() {
  const now = new Date()
  return (
    <>
      <hr />

      <p>{now.getFullYear()} - BuscadorCEP! </p>
    </>
  )
}
