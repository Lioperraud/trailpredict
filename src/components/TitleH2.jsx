function TitleH2({ title, colorText = 'text-gray-700' }) {
  return (
    <h2 className={`justify-start text-xl font-bold ${colorText}`}>{title}</h2>
  )
}
export default TitleH2
