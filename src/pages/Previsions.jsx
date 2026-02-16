import Header from '../components/Header'
import Card from '../components/Card'
import { scoreTrail } from '../utils/calcul'

function Previsions() {
  const calcul = scoreTrail('7:27:00', 77)
  return (
    <>
      <Header title="Prévisions" />
      <section className="p-8 flex flex-wrap gap-4">
        <Card title="Mes prévisions" classname="w-full">
          <div>28/03/2026 - Trail du Ventoux - 50km - 2380m</div>
          <div>Calcul : {calcul}</div>
        </Card>
      </section>
    </>
  )
}
export default Previsions
