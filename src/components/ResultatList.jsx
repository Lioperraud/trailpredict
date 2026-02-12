import ResultatElement from './ResultatElement'
import InputSearch from './InputSearch'
import ListTable from './ListTable'
import Modal from './Modal'
import ButtonPrimary from './ButtonPrimary'
import ResultatAdd from './ResultatAdd'
import { useState, useEffect } from 'react'

function ResultatList() {
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
  const [search, setSearch] = useState('')
  const filteredResultats = resultats.filter((r) =>
    r.nom.toLowerCase().includes(search.toLowerCase()),
  )
  const orderedResultats = filteredResultats.sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )

  const deleteResultat = (id) => {
    setResultats((prev) => prev.filter((r) => r.id !== id))
  }
  const techniciteTab = [
    { value: '1', label: 'Faible' },
    { value: '2', label: 'Moyenne' },
    { value: '3', label: 'Elevé' },
  ]

  const headerListTable = [
    {
      libelle: 'Date',
      class: 'col-span-2',
    },
    {
      libelle: 'Trail',
      class: 'col-span-3',
    },
    {
      libelle: 'Distance',
      class: 'col-span-2 text-right',
    },
    {
      libelle: 'Denivelé',
      class: 'col-span-2 text-right',
    },
    {
      libelle: 'Temps',
      class: 'col-span-2 text-right',
    },
    {
      libelle: '',
      class: 'col-span-1',
    },
  ]

  return (
    <>
      <InputSearch
        search={search}
        onchange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher une course..."
      />
      <ListTable header={headerListTable}>
        {orderedResultats.map((resultat) => (
          <ResultatElement
            key={resultat.id}
            resultat={resultat}
            techniciteTab={techniciteTab}
            onDelete={deleteResultat}
          />
        ))}
      </ListTable>
      <ButtonPrimary libelle="Ajouter" onclick={handleClickAdd} />
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
    </>
  )
}
export default ResultatList
