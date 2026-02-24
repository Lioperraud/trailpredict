import Header from '../components/Header'
import ResultatStat from '../components/ResultatStat'
import { initvaleur } from '../utils/dev'
import Card from '../components/Card'
import CardPushLight from '../components/CardPushLight'
import InfoIcoTextLine from '../components/InfoIcoTextLine'
import IcoPrevision from '../assets/ico-prevision.svg?react'
import IcoResultat from '../assets/ico-resultat.svg?react'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getResultats } from '../utils/resultat'
import { predictTime, estimateIndiceFromHistory } from '../utils/calcul'
import ButtonPrimary from '../components/ButtonPrimary'

function Home() {
  //initvaleur()

  const [resultatExiste, setResultatExiste] = useState(false)
  const [resultats] = useState(() => {
    return getResultats()
  })
  useEffect(() => {
    if (resultats.length) setResultatExiste(true)
  }, [resultats])

  const [myTrail, setMyTrail] = useState(() => {
    const saved = localStorage.getItem('myTrail')
    return saved
      ? JSON.parse(saved)
      : { distance: '', denivele: '', technicite: '' }
  })
  const [predictExiste, SetPredictExiste] = useState(false)
  const [tempsPredict, setTempsPredict] = useState('')
  useEffect(() => {
    localStorage.setItem('myTrail', JSON.stringify(myTrail))
    if (
      myTrail.distance !== '' &&
      myTrail.denivele !== '' &&
      myTrail.technicite !== ''
    ) {
      SetPredictExiste(true)
      setTempsPredict(
        predictTime(
          estimateIndiceFromHistory(resultats, myTrail),
          myTrail.distance,
          myTrail.denivele,
          myTrail.technicite,
          false,
        ),
      )
    } else SetPredictExiste(false)
  }, [myTrail])

  return (
    <>
      <Header title="Accueil" />
      <section className="px-8 flex flex-wrap gap-4">
        {!resultatExiste ? (
          <>
            <Card title="Bienvenue dans TrailPredict">
              <p>
                Commencez par saisir vos résultats pour estimer votre chrono en
                trail.
                <br />
                Plus vous partagez d'informations, plus l'estimation sera fiable
                et personnalisée 💪
              </p>
              <NavLink to="/resultats">
                <ButtonPrimary libelle="Saisir mes résultats" />
              </NavLink>
            </Card>
          </>
        ) : (
          <>
            <div className="w-full grid grid-cols-12 gap-4">
              <CardPushLight classname="cursor-pointer col-span-3">
                <NavLink to="/resultats">
                  <InfoIcoTextLine
                    Ico={IcoResultat}
                    titre="Mes résultats"
                    chiffre={`${resultats.length} trails`}
                  />
                </NavLink>
              </CardPushLight>
              {predictExiste && (
                <CardPushLight classname="cursor-pointer col-span-3">
                  <NavLink to="/previsions">
                    <InfoIcoTextLine
                      Ico={IcoPrevision}
                      titre="Prochain objectif"
                      chiffre={tempsPredict}
                    />
                  </NavLink>
                </CardPushLight>
              )}
            </div>
            <ResultatStat resultats={resultats} />
          </>
        )}
      </section>
    </>
  )
}
export default Home
