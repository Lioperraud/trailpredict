import Header from '../components/Header'
import Card from '../components/Card'
import Modal from '../components/Modal'
import ResultatList from '../components/ResultatList'
import ButtonPrimary from '../components/ButtonPrimary'
import ResultatAdd from '../components/ResultatAdd'
import { useState, useEffect } from 'react'

function Resultats() {
  const [addResultat, setAddResultat] = useState(false)
  const handleClickAdd = () => {
    setAddResultat(true)
  }
  const [resultats, setResultats] = useState(() => {
    const saved = localStorage.getItem('resultats')
    return saved ? JSON.parse(saved) : []
  })
  useEffect(() => {
    localStorage.setItem('resultats', JSON.stringify(resultats))
  }, [resultats])

  const techniciteTab = [
    { value: '1', label: 'Faible' },
    { value: '2', label: 'Moyenne' },
    { value: '3', label: 'Elevé' },
  ]

  return (
    <>
      <Header title="Résultats" />
      <section className="flex flex-col gap-4 p-8">
        <Card title="Mes résultats">
          <ResultatList resultats={resultats} techniciteTab={techniciteTab} />
          <ButtonPrimary libelle="Ajouter" onclick={handleClickAdd} />
        </Card>
        {addResultat && (
          <Modal onclickclose={() => setAddResultat(false)}>
            <ResultatAdd
              resultats={resultats}
              setResultats={setResultats}
              setAddResultat={setAddResultat}
              techniciteTab={techniciteTab}
            />
          </Modal>
        )}
      </section>
    </>
  )
}
export default Resultats
