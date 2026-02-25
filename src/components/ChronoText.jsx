function ChronoText({
  Ico,
  titre,
  chrono,
  precisions,
  highlighting = false,
  icoStroke = false,
}) {
  const divFirstClass = `h-full flex flex-col justify-between text-white ${highlighting ? 'gap-16' : 'gap-8'}`
  const h3Class = `flex flex-row gap-2 items-center font-medium ${highlighting ? 'text-xl xl:text-2xl' : 'text-lg xl:text-xl'}`

  const IcoClassSize = highlighting ? 'w-5 xl:w-6' : 'w-4 xl:w-5'
  const IcoClassSizeColor = icoStroke ? 'stroke-white' : 'fill-white'

  const IcoClass = `h-auto ${IcoClassSize} ${IcoClassSizeColor}`

  const h4Class = `${highlighting ? 'text-5xl xl:text-8xl' : 'text-4xl xl:text-6xl'}`
  const h5Class = `${highlighting ? 'text-white text-sm xl:text-base' : 'text-sm'}`
  return (
    <div className={divFirstClass}>
      <h3 className={h3Class}>
        <Ico className={IcoClass} />
        {titre}
      </h3>
      <div className="flex flex-col gap-2 xl:gap-4">
        <h4 className={h4Class}>{chrono}</h4>
        <h5 className={h5Class}>{precisions}</h5>
      </div>
    </div>
  )
}
export default ChronoText
