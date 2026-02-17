import Header from '../components/Header'
import Card from '../components/Card'
import PrevisionsForm from '../components/PrevisionsForm'
import PrevisionsResultats from '../components/PrevisionsResultats'
import { useState, useEffect } from 'react'

function Previsions() {
  const saved = localStorage.getItem('resultats')
  const resultats = saved ? JSON.parse(saved) : []
  if (!resultats.length)
    return (
      <>
        <Header title="Prévisions" />
        <section className="p-8 flex flex-wrap gap-4">
          <Card title="Important" classname="w-full">
            <p>
              Vous devez d'abord saisir des résultats pour faire des prévisions
            </p>
          </Card>
        </section>
      </>
    )

  const [myTrail, setMyTrail] = useState(() => {
    const saved = localStorage.getItem('myTrail')
    return saved
      ? JSON.parse(saved)
      : [{ distance: '', denivele: '', technicite: '' }]
  })
  const [predict, SetPredict] = useState(false)
  useEffect(() => {
    localStorage.setItem('myTrail', JSON.stringify(myTrail))
    if (
      myTrail.distance.length &&
      myTrail.denivele.length &&
      myTrail.technicite.length
    )
      SetPredict(true)
    else SetPredict(false)
  }, [myTrail])

  return (
    <>
      <Header title="Prévisions" />
      <section className="p-8 flex flex-wrap gap-4">
        <Card title="Mon prochain trail" classname="w-96">
          <PrevisionsForm
            myTrail={myTrail}
            setMyTrail={setMyTrail}
            predict={predict}
          />
        </Card>
        {predict && (
          <PrevisionsResultats classname="w-full" myTrail={myTrail} />
        )}
      </section>
    </>
  )
}
export default Previsions
