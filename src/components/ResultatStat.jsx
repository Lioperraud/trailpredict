import CardPush from './CardPush'
import Stat from './Stat'
import { getResultats } from '../utils/resultat'

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
  return (
    <div className="w-full flex flex-wrap gap-4">
      <CardPush>
        <Stat titre="Total" chiffre={resultats.length} precisions="Trails" />
      </CardPush>
      <CardPush>
        <Stat
          titre="Distance la plus longue"
          chiffre={`${maxDistanceItem.distance} km`}
          precisions={maxDistanceItem.nom}
        />
      </CardPush>
      <CardPush>
        <Stat
          titre="Dénivelé le plus grand"
          chiffre={`${maxDeniveleFormate} m`}
          precisions={maxDeniveleItem.nom}
        />
      </CardPush>
      <CardPush>
        <Stat
          titre="Meilleur performance"
          chiffre="00:00:00"
          precisions="Grand trail de la loutre"
        />
      </CardPush>
    </div>
  )
}
export default ResultatStat
