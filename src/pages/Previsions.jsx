import Header from '../components/Header'
import Card from '../components/Card'
import { scoreTrail, predictTime, indiceAvg } from '../utils/calcul'

function Previsions() {
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

  const predictMin = predictTime(
    indice.min,
    myTrail.distance,
    myTrail.denivele,
    myTrail.technicite,
    false,
  )
  const predictMinDifficile = predictTime(
    indice.min,
    myTrail.distance,
    myTrail.denivele,
    myTrail.technicite,
    true,
  )
  const predictAvg = predictTime(
    indice.avg,
    myTrail.distance,
    myTrail.denivele,
    myTrail.technicite,
    false,
  )
  const predictAvgDifficile = predictTime(
    indice.avg,
    myTrail.distance,
    myTrail.denivele,
    myTrail.technicite,
    true,
  )
  const predictMax = predictTime(
    indice.max,
    myTrail.distance,
    myTrail.denivele,
    myTrail.technicite,
    false,
  )
  const predictMaxDifficile = predictTime(
    indice.max,
    myTrail.distance,
    myTrail.denivele,
    myTrail.technicite,
    true,
  )
  return (
    <>
      <Header title="Prévisions" />
      <section className="p-8 flex flex-wrap gap-4">
        <Card title="Mes prévisions" classname="w-full">
          <div>
            {myTrail.distance}km - {myTrail.denivele}m - {myTrail.temps}
          </div>
          <div>Indice : {calcul}</div>
          <div>
            Prediction Min : {indice.min} - {predictMin} / Condition difficile :{' '}
            {predictMinDifficile}
          </div>
          <div>
            Prediction Avg : {indice.avg} - {predictAvg} / Condition difficile :{' '}
            {predictAvgDifficile}
          </div>
          <div>
            Prediction Max : {indice.max} - {predictMax} / Condition difficile :{' '}
            {predictMaxDifficile}
          </div>
        </Card>
      </section>
    </>
  )
}
export default Previsions
