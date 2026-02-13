function Stat({ titre, chiffre, precisions }) {
  return (
    <div className="flex flex-col items-center content-center py-8 px-10 gap-2">
      <span className="text-1xl text-white">{titre}</span>
      <span className="text-6xl text-white">{chiffre}</span>
      <span className="text-2xl text-white">{precisions}</span>
    </div>
  )
}
export default Stat
