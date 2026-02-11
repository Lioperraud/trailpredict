import Header from '../components/Header'
import Card from '../components/Card'
import ResultatList from '../components/ResultatList'

function Resultats() {
  return (
    <>
      <Header title="Résultats" />
      <section className="flex flex-col gap-4 p-8">
        <Card title="Mes résultats">
          <ResultatList />
        </Card>
      </section>
    </>
  )
}
export default Resultats
