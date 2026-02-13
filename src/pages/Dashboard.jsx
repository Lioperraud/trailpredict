import Header from '../components/Header'
import ResultatStat from '../components/ResultatStat'

function Dashboard() {
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
