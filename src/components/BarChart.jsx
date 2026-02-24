import TitleH2 from './TitleH2'

function BarChart({ titre, min, max, vals }) {
  const palier = Math.round((max - min) / 5)
  const legende = []
  for (let val = max; val >= min; val = val - palier) {
    legende.push(val)
  }
  return (
    <>
      <TitleH2 title={titre} colorText="text-white" />
      <div className="w-full flex">
        {/* Axe Y */}
        <div className="flex flex-col justify-between h-64 w-8 text-xs text-right text-white">
          {legende.map((legende) => (
            <span key={legende}>{legende}</span>
          ))}
        </div>

        {/* Graphique */}
        <div className="flex items-end justify-around gap-4 h-64 flex-1">
          {vals.map((indice) => (
            <div className="flex flex-col items-center justify-end w-10 h-full">
              <div
                className="w-2 bg-white rounded-2xl relative"
                style={{ height: `${(indice / max) * 100}%` }}
              >
                <span className="absolute -top-5 -left-3 w-8 text-center text-white text-xs">
                  {indice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default BarChart
