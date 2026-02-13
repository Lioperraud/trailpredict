import Header from '../components/Header'
import Card from '../components/Card'
import ResultatList from '../components/ResultatList'
import { useState, useEffect } from 'react'

function Resultats() {
  //Valeurs de la liste
  const [resultats, setResultats] = useState(() => {
    const saved = localStorage.getItem('resultats')
    return saved ? JSON.parse(saved) : []
  })
  useEffect(() => {
    localStorage.setItem('resultats', JSON.stringify(resultats))
  }, [resultats])

  return (
    <>
      <Header title="Résultats" />
      <section className="p-8 flex flex-wrap gap-4">
        <Card title="Mes résultats" classname="w-full">
          <ResultatList resultats={resultats} setResultats={setResultats} />
        </Card>
      </section>
    </>
  )
}
export default Resultats
