function InfoIcoTextLine({ Ico, titre, chiffre }) {
  return (
    <div className="h-full flex flex-row items-start justify-between">
      <div className="flex flex-col items-start">
        <h3 className="text-sm font-bold text-secondary">{titre}</h3>
        <h2 className="text-2xl font-bold text-primary">{chiffre}</h2>
      </div>
      <span className="rounded-lg p-4 bg-primary flex justify-center items-center">
        <Ico className="fill-white w-6 h-auto" />
      </span>
    </div>
  )
}
export default InfoIcoTextLine
