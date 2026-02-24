function TitleH2({ title, colorText = 'text-secondary' }) {
  return (
    <h2 className={`justify-start text-xl font-bold ${colorText}`}>{title}</h2>
  )
}
export default TitleH2
