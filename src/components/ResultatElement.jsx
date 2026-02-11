function ResultatElement({ resultat }) {
  const kmEffort = Math.round(resultat.distance + resultat.denivele / 100)
  const dateFormatFr = new Date(resultat.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <li className="flex gap-4 py-3 border-b border-gray-200">
      <span className="w-32">{dateFormatFr}</span>
      <span className="flex-auto font-bold">{resultat.nom}</span>
      <span className="w-16 text-right">{resultat.distance}</span>
      <span className="w-16 text-right">{resultat.denivele}</span>
      <span className="w-16 text-right">{kmEffort}</span>
      <span className="w-24 font-bold text-right">{resultat.temps}</span>
    </li>
  )
}
export default ResultatElement
