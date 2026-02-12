import ResultatElement from './ResultatElement'
import InputSearch from './InputSearch'
import ListTable from './ListTable'
import Modal from './Modal'
import ButtonPrimary from './ButtonPrimary'
import ResultatForm from './ResultatForm'
import { useState, useEffect } from 'react'
import { HEADERLISTTABLE } from '../constants/resultat'

function ResultatList() {
  //Valeurs de la liste
  const [resultats, setResultats] = useState(() => {
    const saved = localStorage.getItem('resultats')
    return saved ? JSON.parse(saved) : []
  })
  useEffect(() => {
    localStorage.setItem('resultats', JSON.stringify(resultats))
  }, [resultats])

  //Affichage de la liste suivant filtre et ordre
  const [search, setSearch] = useState('')
  const filteredResultats = resultats.filter((r) =>
    r.nom.toLowerCase().includes(search.toLowerCase()),
  )
  const orderedResultats = filteredResultats.sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )

  //Action sur la liste
  const [addResultat, setAddResultat] = useState(false)
  const deleteResultat = (id) => {
    setResultats((prev) => prev.filter((r) => r.id !== id))
  }
  const [editResultat, setEditResultat] = useState(null)
  const handleEdit = (r) => {
    setEditResultat(r)
    setAddResultat(true)
  }
  const handleAdd = () => {
    setEditResultat(null)
    setAddResultat(true)
  }

  return (
    <>
      <InputSearch
        search={search}
        onchange={(e) => setSearch(e.target.value)}
        placeholder="Rechercher une course..."
      />
      <ListTable header={HEADERLISTTABLE}>
        {orderedResultats.map((resultat) => (
          <ResultatElement
            key={resultat.id}
            resultat={resultat}
            onDelete={deleteResultat}
            onEdit={handleEdit}
          />
        ))}
      </ListTable>
      <ButtonPrimary libelle="Ajouter" onclick={handleAdd} />
      {addResultat && (
        <Modal onclickclose={() => setAddResultat(false)}>
          <ResultatForm
            resultats={resultats}
            setResultats={setResultats}
            setAddResultat={setAddResultat}
            edit={editResultat}
          />
        </Modal>
      )}
    </>
  )
}
export default ResultatList
