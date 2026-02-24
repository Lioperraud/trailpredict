import CardPush from './CardPush'
import CardPushSecondary from './CardPushSecondary'
import CardPushLight from './CardPushLight'
import ChronoText from './ChronoText'
import InfoIcoText from './InfoIcoText'
import { predictTime, estimateIndiceFromHistory } from '../utils/calcul'
import { getResultats } from '../utils/resultat'
import IcoPrevision from '../assets/ico-prevision.svg?react'
import IcoResultat from '../assets/ico-resultat.svg?react'
import IcoPluie from '../assets/ico-pluie.svg?react'
import IcoFleche from '../assets/ico-fleche.svg?react'
import IcoIndice from '../assets/ico-indice.svg?react'

function PrevisionsResultats({ classname, myTrail }) {
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
  const tempsPredict = predictTime(
    indice,
    myTrail.distance,
    myTrail.denivele,
    myTrail.technicite,
    false,
  )
  const tempsPredictConditionDifficile = predictTime(
    indice,
    myTrail.distance,
    myTrail.denivele,
    myTrail.technicite,
    true,
  )
  const tempsPredict18mois = predictTime(
    indice18mois,
    myTrail.distance,
    myTrail.denivele,
    myTrail.technicite,
    false,
  )

  return (
    <div className={`grid grid-cols-12 gap-4 ${classname}`}>
      <CardPush classname="col-span-7 row-span-2 flex flex-col justify-between">
        <ChronoText
          Ico={IcoPrevision}
          titre="Temps estimé"
          chrono={tempsPredict}
          precisions="En prenant en compte tous tes résultats"
          highlighting="true"
        />
      </CardPush>
      <CardPushLight classname="col-span-3 row-span-2">
        <InfoIcoText
          Ico={IcoIndice}
          titre="Indice"
          sousTitre="Prévisionnel"
          chiffre={indice}
        />
      </CardPushLight>
      <div className="col-span-12 grid grid-cols-12 gap-4">
        <CardPushSecondary classname="col-span-5">
          <ChronoText
            Ico={IcoFleche}
            titre="Forme actuelle"
            chrono={tempsPredict18mois}
            precisions="Calcul basé sur les 18 derniers mois"
          />
        </CardPushSecondary>
        <CardPushSecondary classname="col-span-5">
          <ChronoText
            Ico={IcoPluie}
            titre="En condition difficile"
            chrono={tempsPredictConditionDifficile}
            precisions="Mauvais temps, terrain boueux, etc..."
          />
        </CardPushSecondary>
      </div>
    </div>
  )
}
export default PrevisionsResultats
