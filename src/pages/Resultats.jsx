import Header from '../components/Header'
import Card from '../components/Card'
import ResultatList from '../components/ResultatList'

function Resultats() {
  return (
    <>
      <Header title="Résultats" />
      <section className="px-6 xl:px-8 flex flex-wrap gap-4">
        <Card title="Mes résultats" classname="w-full">
          <ResultatList />
        </Card>
      </section>
    </>
  )
}
export default Resultats
