import Card from '../components/Card'
import CardPush from './CardPush'
import Stat from './Stat'
import { predictTime, estimateIndiceFromHistory } from '../utils/calcul'
import { getResultats } from '../utils/resultat'

function PrevisionsResultats({ myTrail }) {
  if (
    !myTrail.distance.length ||
    !myTrail.denivele.length ||
    !myTrail.technicite.length
  )
    return

  const resultats = getResultats()
  const indice = estimateIndiceFromHistory(resultats, myTrail)

  if (!indice)
    return (
      <p>
        Impossible de faire une estimation, vous n'avez pas de résultat qui
        correspond à votre objectif
      </p>
    )

  console.log(indice)

  const datemoins18mois = new Date()
  datemoins18mois.setMonth(datemoins18mois.getMonth() - 18)
  const resultats18mois = resultats.filter((r) => {
    return new Date(r.date) > datemoins18mois
  })
  const indice18mois = estimateIndiceFromHistory(resultats18mois, myTrail)

  const predictions = []
  predictions.push({
    temps: predictTime(
      indice,
      myTrail.distance,
      myTrail.denivele,
      myTrail.technicite,
      false,
    ),
    explication: 'le plus probable',
  })
  predictions.push({
    temps: predictTime(
      indice,
      myTrail.distance,
      myTrail.denivele,
      myTrail.technicite,
      true,
    ),
    explication: 'conditions difficile',
  })
  if (indice18mois) {
    predictions.push({
      temps: predictTime(
        indice18mois,
        myTrail.distance,
        myTrail.denivele,
        myTrail.technicite,
        false,
      ),
      explication: 'tendance (18 mois)',
    })
  }

  return (
    <Card title="Mes résultats possible" className="w-full">
      <div className="flex flex-wrap gap-2">
        {predictions.map((prediction, index) => (
          <CardPush key={index}>
            <Stat
              titre="Chrono"
              chiffre={prediction.temps}
              precisions={prediction.explication}
            />
          </CardPush>
        ))}
      </div>
    </Card>
  )
}
export default PrevisionsResultats
