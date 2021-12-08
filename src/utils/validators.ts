export default function validateCpf(cep: string) {
  const regex = /^([\d]{2})\.?([\d]{3})-?([\d]{3})/
  return regex.test(cep)
}
