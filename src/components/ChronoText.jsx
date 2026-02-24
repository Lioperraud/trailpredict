function ChronoText({
  Ico,
  titre,
  chrono,
  precisions,
  highlighting = false,
  icoStroke = false,
}) {
  const divFirstClass = `h-full flex flex-col justify-between text-white`
  const h3Class = `flex flex-row gap-2 items-center font-medium ${highlighting ? 'text-2xl' : 'text-xl'}`

  const IcoClassSize = highlighting ? 'w-6' : 'w-5'
  const IcoClassSizeColor = icoStroke ? 'stroke-white' : 'fill-white'

  const IcoClass = `h-auto ${IcoClassSize} ${IcoClassSizeColor}`

  const h4Class = `${highlighting ? 'text-8xl' : 'text-6xl'}`
  const h5Class = `${highlighting ? 'text-white text-sm' : 'text-xs'}`
  return (
    <div className={divFirstClass}>
      <h3 className={h3Class}>
        <Ico className={IcoClass} />
        {titre}
      </h3>
      <div className="flex flex-col gap-4">
        <h4 className={h4Class}>{chrono}</h4>
        <h5 className={h5Class}>{precisions}</h5>
      </div>
    </div>
  )
}
export default ChronoText
