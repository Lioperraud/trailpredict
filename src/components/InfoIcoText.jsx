function InfoIcoText({ Ico, titre, sousTitre, chiffre }) {
  return (
    <div className="h-full flex flex-col items-center justify-between">
      <span className="rounded-lg p-4 bg-teal-300 flex justify-center items-center">
        <Ico className="fill-white w-8 h-auto" />
      </span>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold">{titre}</h3>
        <h4 className="text-sm font-bold text-gray-400">{sousTitre}</h4>
        <h2 className="text-6xl font-bold border-t border-gray-400 px-8 pt-2">
          {chiffre}
        </h2>
      </div>
    </div>
  )
}
export default InfoIcoText
