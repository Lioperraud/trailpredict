import Header from '../components/Header'
import Card from '../components/Card'
import { scoreTrail, predictTime } from '../utils/calcul'

function Previsions() {
  const calcul = scoreTrail('44.91', '1531', '5:11:37', '1', false)
  const predict = predictTime(calcul, '44.91', '1531', '1', false)
  return (
    <>
      <Header title="Prévisions" />
      <section className="p-8 flex flex-wrap gap-4">
        <Card title="Mes prévisions" classname="w-full">
          <div>
            28/03/2026 - Trail du Mont-Saint-Romain - 44.91km - 1531m - 5:11:37
          </div>
          <div>Calcul : {calcul}</div>
          <div>Prediction : {predict}</div>
        </Card>
      </section>
    </>
  )
}
export default Previsions
