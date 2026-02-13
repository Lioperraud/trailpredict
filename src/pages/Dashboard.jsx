import Header from '../components/Header'
import ResultatStat from '../components/ResultatStat'
import { initvaleur } from '../utils/dev'

function Dashboard() {
  //initvaleur()
  return (
    <>
      <Header title="Dashboard" />
      <section className="p-8 flex flex-wrap gap-4">
        <ResultatStat />
      </section>
    </>
  )
}
export default Dashboard
