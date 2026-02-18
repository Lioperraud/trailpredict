import Header from '../components/Header'
import ResultatStat from '../components/ResultatStat'
import { initvaleur } from '../utils/dev'
import Card from '../components/Card'

function Dashboard() {
  //initvaleur()
  return (
    <>
      <Header title="Dashboard" />
      <section className="p-8 flex flex-wrap gap-4">
        <Card title="Statistiques" className="w-full">
          <ResultatStat />
        </Card>
      </section>
    </>
  )
}
export default Dashboard
