import CardPush from './CardPush'
import CardPushSecondary from './CardPushSecondary'
import CardPushLight from './CardPushLight'
import Stat from './Stat'
import { predictTime, estimateIndiceFromHistory } from '../utils/calcul'
import { getResultats } from '../utils/resultat'
import IcoPrevision from '../assets/ico-prevision.svg?react'
import IcoResultat from '../assets/ico-resultat.svg?react'
import IcoPluie from '../assets/ico-pluie.svg?react'
import IcoCalendrier from '../assets/ico-calendrier.svg?react'

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
      <CardPush classname="col-span-7 row-span-2 text-white flex flex-col justify-between min-h-32">
        <h3 className="text-2xl flex flex-row gap-2 items-center font-medium">
          <IcoPrevision className="w-6 h-auto fill-white" />
          Temps estimé
        </h3>
        <div className="flex flex-col gap-4">
          <h4 className="text-8xl">{tempsPredict}</h4>
          <h5 className="text-teal-300 text-sm uppercase">
            En prenant en compte tous tes résultats
          </h5>
        </div>
      </CardPush>
      <CardPushLight classname="col-span-3 row-span-2 flex flex-col items-center justify-between">
        <span className="rounded-lg p-4 bg-teal-300 flex justify-center items-center">
          <IcoResultat className="fill-white w-8 h-auto" />
        </span>
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-2xl font-bold">Indice</h3>
          <h4 className="text-sm font-bold text-gray-400">Prévisionnel</h4>
          <h2 className="text-6xl font-bold border-t border-gray-400 px-8 pt-2">
            {indice}
          </h2>
        </div>
      </CardPushLight>
      <div className="col-span-12 grid grid-cols-12 gap-4">
        <CardPushSecondary classname="col-span-5 flex flex-col justify-between text-gray-600">
          <h3 className="text-xl flex flex-row gap-2 items-center font-medium">
            <IcoCalendrier className="w-5 h-auto stroke-gray-600" />
            Forme actuelle
          </h3>
          <div className="flex flex-col gap-4">
            <h4 className="text-6xl">{tempsPredict18mois}</h4>
            <h5 className="text-xs uppercase">
              Calcul basé sur les 18 derniers mois
            </h5>
          </div>
        </CardPushSecondary>
        <CardPushSecondary classname="col-span-5 flex flex-col justify-between text-gray-600">
          <h3 className="text-xl flex flex-row gap-2 items-center font-medium">
            <IcoPluie className="w-5 h-auto fill-gray-600" />
            En condition difficile
          </h3>
          <div className="flex flex-col gap-4">
            <h4 className="text-6xl">{tempsPredictConditionDifficile}</h4>
            <h5 className="text-xs uppercase">
              Mauvais temps, terrain boueux, etc...
            </h5>
          </div>
        </CardPushSecondary>
      </div>
    </div>
  )
}
export default PrevisionsResultats
