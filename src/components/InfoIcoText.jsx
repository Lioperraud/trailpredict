function InfoIcoText({ Ico, titre, sousTitre, chiffre }) {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4 p-4 text-primary">
      <span className="rounded-lg p-4 bg-primary flex justify-center items-center">
        <Ico className="fill-white w-6 xl:w-8 h-auto" />
      </span>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-xl xl:text-2xl font-bold">{titre}</h3>
        <h4 className="text-sm font-bold text-secondary">{sousTitre}</h4>
        <h2 className="text-5xl xl:text-6xl font-bold border-t border-secondary px-8 pt-2">
          {chiffre}
        </h2>
      </div>
    </div>
  )
}
export default InfoIcoText
