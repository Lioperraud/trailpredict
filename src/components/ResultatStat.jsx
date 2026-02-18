import CardPush from './CardPush'
import Stat from './Stat'
import { getResultats } from '../utils/resultat'
import { scoreTrail } from '../utils/calcul'

function ResultatStat() {
  const resultats = getResultats()

  //Si aucun résultat pas de stat
  if (!resultats.length) return false

  const maxDistanceItem = resultats.reduce((a, b) =>
    +a.distance > +b.distance ? a : b,
  )
  const maxDeniveleItem = resultats.reduce((a, b) =>
    +a.denivele > +b.denivele ? a : b,
  )
  const maxDeniveleFormate = (+maxDeniveleItem.denivele).toLocaleString('fr-FR')

  const resultatsWithIndice = resultats.map((r) => ({
    ...r,
    indice: scoreTrail(
      r.distance,
      r.denivele,
      r.temps,
      r.technicite,
      r.conditionDifficile,
    ),
  }))
  const resultatsWithIndiceBest = resultatsWithIndice.reduce((a, b) =>
    a.indice > b.indice ? a : b,
  )
  const indices = resultatsWithIndice.map((i) => i.indice)
  const indiceMoyen = Math.round(
    indices.reduce((a, b) => a + b, 0) / indices.length,
  )
  const indiceMax = indices.reduce((a, b) => (a > b ? a : b))
  const indiceMin = indices.reduce((a, b) => (a < b ? a : b))

  const stats = []
  stats.push({
    titre: 'Total',
    chiffre: resultats.length,
    precisions: 'Trails',
  })
  stats.push({
    titre: 'Distance la plus longue',
    chiffre: `${maxDistanceItem.distance} km`,
    precisions: maxDistanceItem.nom,
  })
  stats.push({
    titre: 'Dénivelé le plus grand',
    chiffre: `${maxDeniveleFormate} m`,
    precisions: maxDeniveleItem.nom,
  })
  stats.push({
    titre: 'Meilleur performance',
    chiffre: resultatsWithIndiceBest.nom,
    precisions: `${resultatsWithIndiceBest.distance}km / ${resultatsWithIndiceBest.denivele}m / ${resultatsWithIndiceBest.temps}`,
  })
  stats.push({
    titre: 'Performance',
    chiffre: indiceMoyen,
    precisions: 'Indice moyen',
  })
  stats.push({
    titre: 'Performance',
    chiffre: indiceMax,
    precisions: 'Meilleur indice',
  })
  stats.push({
    titre: 'Performance',
    chiffre: indiceMin,
    precisions: 'Pire indice',
  })

  return (
    <div className="w-full flex flex-wrap gap-4">
      {stats.map((stat, index) => (
        <CardPush key={index}>
          <Stat
            titre={stat.titre}
            chiffre={stat.chiffre}
            precisions={stat.precisions}
          />
        </CardPush>
      ))}
    </div>
  )
}
export default ResultatStat
