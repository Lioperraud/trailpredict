import Card from './Card'
import CardPush from './CardPush'
import CardPushLight from './CardPushLight'
import CardPushSecondary from './CardPushSecondary'
import { scoreTrail } from '../utils/calcul'
import { timeToSeconds } from '../utils/date'
import IcoResultat from '../assets/ico-resultat.svg?react'
import IcoPrevision from '../assets/ico-prevision.svg?react'
import IcoChrono from '../assets/ico-chrono.svg?react'
import IcoFleche from '../assets/ico-fleche.svg?react'
import IcoDistance from '../assets/ico-distance.svg?react'
import IcoIndice from '../assets/ico-indice.svg?react'
import ChronoText from './ChronoText'
import InfoIcoText from './InfoIcoText'
import ListTable from './ListTable'
import BarChart from '../components/BarChart'

function ResultatStat({ resultats }) {
  //Si aucun résultat pas de stat
  if (!resultats.length) return false

  const maxDistanceItem = resultats.reduce((a, b) =>
    +a.distance > +b.distance ? a : b,
  )
  const maxDeniveleItem = resultats.reduce((a, b) =>
    +a.denivele > +b.denivele ? a : b,
  )
  const maxTempsItem = resultats.reduce((a, b) =>
    timeToSeconds(a.temps) > timeToSeconds(b.temps) ? a : b,
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
  const resultatsWithIndiceBestDate = new Date(
    resultatsWithIndiceBest.date,
  ).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
  const indices = resultatsWithIndice.map((i) => i.indice)
  const indiceMoyen = Math.round(
    indices.reduce((a, b) => a + b, 0) / indices.length,
  )

  const orderedResultats = resultatsWithIndice.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
  const lastResultats = orderedResultats.slice(0, 5)
  const headerMesResultats = [
    {
      name: 'date',
      libelle: 'Date',
      cs: 2,
    },
    {
      name: 'nom',
      libelle: 'Trail',
      cs: 5,
    },
    {
      name: 'distance_denivele',
      libelle: 'Distance / Dénivelé',
      cs: 2,
      right: true,
    },
    {
      name: 'temps',
      libelle: 'Temps',
      cs: 3,
      right: true,
    },
  ]
  const lastIndices = orderedResultats.slice(0, 10).map((i) => i.indice)

  return (
    <div className="w-full grid grid-cols-12 gap-4">
      <CardPushLight classname="col-span-2">
        <InfoIcoText
          Ico={IcoIndice}
          titre="Indice"
          sousTitre="Moyen"
          chiffre={indiceMoyen}
        />
      </CardPushLight>
      <CardPush classname="col-span-10 flex flex-col justify-between">
        <ChronoText
          Ico={IcoPrevision}
          titre="Meilleur performance"
          chrono={resultatsWithIndiceBest.nom}
          precisions={`${resultatsWithIndiceBestDate} - ${resultatsWithIndiceBest.distance} km - ${resultatsWithIndiceBest.denivele} m - ${resultatsWithIndiceBest.temps} - Indice : ${resultatsWithIndiceBest.indice}`}
          highlighting="true"
        />
      </CardPush>
      <CardPushSecondary classname="col-span-4 row-start-2">
        <ChronoText
          Ico={IcoDistance}
          titre="Distance la plus longue"
          chrono={`${maxDistanceItem.distance} km`}
          precisions={maxDistanceItem.nom}
        />
      </CardPushSecondary>
      <CardPushSecondary classname="col-span-4 row-start-2">
        <ChronoText
          Ico={IcoFleche}
          titre="Dénivelé le plus grand"
          chrono={`${maxDeniveleFormate} km`}
          precisions={maxDeniveleItem.nom}
        />
      </CardPushSecondary>
      <CardPushSecondary classname="col-span-4 row-start-2">
        <ChronoText
          Ico={IcoChrono}
          icoStroke="true"
          titre="Durée la plus longue"
          chrono={maxTempsItem.temps}
          precisions={maxTempsItem.nom}
        />
      </CardPushSecondary>
      <Card title="Mes derniers résultats" classname="col-span-6">
        <ListTable
          header={headerMesResultats}
          onclickheader={() => {
            return false
          }}
          ordre="false"
        >
          {lastResultats.map((resultat) => (
            <li
              key={resultat.id}
              className="grid grid-cols-12 gap-4 py-3 border-b border-gray-200"
            >
              <span className="col-span-2 font-bold">
                {new Date(resultat.date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="col-span-5 font-bold">{resultat.nom}</span>
              <span className="col-span-2 text-right">{`${resultat.distance} km / +${resultat.denivele} m`}</span>
              <span className="col-span-3 font-bold text-right">
                {resultat.temps}
              </span>
            </li>
          ))}
        </ListTable>
      </Card>
      <CardPush classname="col-span-6 flex flex-col gap-6 ">
        <BarChart
          titre="Mes 10 derniers indices"
          min="0"
          max="1000"
          vals={lastIndices}
        />
      </CardPush>
    </div>
  )
}
export default ResultatStat
