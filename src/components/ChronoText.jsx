function ChronoText({ Ico, titre, chrono, precisions, highlighting = false }) {
  const divFirstClass = `h-full flex flex-col justify-between ${highlighting ? 'text-white' : 'text-gray-600'}`
  const h3Class = `flex flex-row gap-2 items-center font-medium ${highlighting ? 'text-2xl' : 'text-xl'}`
  const IcoClass = `h-auto ${highlighting ? '"w-6 fill-white' : 'w-5  fill-gray-600'}`
  const h4Class = `${highlighting ? 'text-8xl' : 'text-6xl'}`
  const h5Class = `uppercase ${highlighting ? 'text-teal-300 text-sm' : 'text-xs'}`
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
