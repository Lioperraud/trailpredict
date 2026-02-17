import Header from '../components/Header'
import Card from '../components/Card'
import { scoreTrail, predictTime, indiceAvg } from '../utils/calcul'
import PrevisionsForm from '../components/PrevisionsForm'
import { useState, useEffect } from 'react'

function Previsions() {
  const [myTrail, setMyTrail] = useState(() => {
    const saved = localStorage.getItem('myTrail')
    return saved
      ? JSON.parse(saved)
      : [{ distance: '', denivele: '', technicite: '' }]
  })
  useEffect(() => {
    localStorage.setItem('myTrail', JSON.stringify(myTrail))
  }, [myTrail])

  /*
  const myTrail = {
    distance: '38',
    denivele: '2100',
    temps: '5:05:30',
    technicite: '2',
    conditionDifficile: false,
  }
  
  const calcul = scoreTrail(
    myTrail.distance,
    myTrail.denivele,
    myTrail.temps,
    myTrail.technicite,
    myTrail.conditionDifficile,
  )
  const saved = localStorage.getItem('resultats')
  const resultats = saved ? JSON.parse(saved) : []
  const indice = indiceAvg(resultats, myTrail.distance)

  const predictAvg = predictTime(
    indice.avg,
    myTrail.distance,
    myTrail.denivele,
    myTrail.technicite,
    false,
  )
    */
  return (
    <>
      <Header title="Prévisions" />
      <section className="p-8 flex flex-wrap gap-4">
        <Card title="Objectif" classname="w-64">
          <PrevisionsForm myTrail={myTrail} setMyTrail={setMyTrail} />
        </Card>
      </section>
    </>
  )
}
export default Previsions
