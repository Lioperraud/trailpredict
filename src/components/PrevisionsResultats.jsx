import Card from '../components/Card'
import CardPush from './CardPush'
import Stat from './Stat'
import { predictTime, estimateIndiceFromHistory } from '../utils/calcul'
import { getResultats } from '../utils/resultat'

function PrevisionsResultats({ myTrail }) {
  if (
    myTrail.distance === '' ||
    myTrail.denivele === '' ||
    myTrail.technicite === ''
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

  const datemoins18mois = new Date()
  datemoins18mois.setMonth(datemoins18mois.getMonth() - 18)
  const resultats18mois = resultats.filter((r) => {
    return new Date(r.date) > datemoins18mois
  })
  const indice18mois = estimateIndiceFromHistory(resultats18mois, myTrail)

  const predictions = []
  predictions.push({
    titre: 'Chrono',
    valeur: predictTime(
      indice,
      myTrail.distance,
      myTrail.denivele,
      myTrail.technicite,
      false,
    ),
    explication: 'le plus probable',
  })
  predictions.push({
    titre: 'Chrono',
    valeur: predictTime(
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
      titre: 'Chrono',
      valeur: predictTime(
        indice18mois,
        myTrail.distance,
        myTrail.denivele,
        myTrail.technicite,
        false,
      ),
      explication: 'tendance (18 mois)',
    })
  }
  predictions.push({
    titre: 'Indice',
    valeur: indice,
    explication: '',
  })

  return (
    <Card title="Mes résultats possible" className="w-full">
      <div className="flex flex-wrap gap-2">
        {predictions.map((prediction, index) => (
          <CardPush key={index}>
            <Stat
              titre={prediction.titre}
              chiffre={prediction.valeur}
              precisions={prediction.explication}
            />
          </CardPush>
        ))}
      </div>
    </Card>
  )
}
export default PrevisionsResultats
