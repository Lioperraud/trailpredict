function TitleH2({ title, colorText = 'text-primary' }) {
  return (
    <h2 className={`justify-start text-lg xl:text-xl font-bold ${colorText}`}>
      {title}
    </h2>
  )
}
export default TitleH2
