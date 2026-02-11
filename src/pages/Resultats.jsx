import Header from '../components/Header'
import Card from '../components/Card'
import Modal from '../components/Modal'
import ResultatList from '../components/ResultatList'
import ButtonPrimary from '../components/ButtonPrimary'
import ResultatAdd from '../components/ResultatAdd'
import { useState } from 'react'

function Resultats() {
  const [addResultat, setAddResultat] = useState(false)
  const handleClickAdd = () => {
    setAddResultat(true)
  }
  return (
    <>
      <Header title="Résultats" />
      <section className="flex flex-col gap-4 p-8">
        <Card title="Mes résultats">
          <ResultatList />
          <ButtonPrimary libelle="Ajouter" onclick={handleClickAdd} />
        </Card>
        {addResultat && (
          <Modal onclickclose={() => setAddResultat(false)}>
            <ResultatAdd />
          </Modal>
        )}
      </section>
    </>
  )
}
export default Resultats
