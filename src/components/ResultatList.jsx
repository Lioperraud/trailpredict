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
  const [page, setPage] = useState(1)
  const nbResultatsParPage = 10
  const filteredResultats = resultats.filter((r) =>
    ['nom', 'date'].some((key) =>
      r[key].toLowerCase().includes(search.toLowerCase()),
    ),
  )
  const orderedResultats = filteredResultats.sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )
  const paginatedResultats = orderedResultats.slice(
    page * nbResultatsParPage - nbResultatsParPage,
    page * nbResultatsParPage,
  )
  const totalPages = Math.ceil(resultats.length / nbResultatsParPage)
  const pagination = Array.from({ length: totalPages }, (_, i) => i + 1)

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
      {resultats.length > 0 ? (
        <>
          <InputSearch
            search={search}
            onchange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher une résultat..."
          />
          <ListTable header={HEADERLISTTABLE}>
            {paginatedResultats.map((resultat) => (
              <ResultatElement
                key={resultat.id}
                resultat={resultat}
                onDelete={deleteResultat}
                onEdit={handleEdit}
              />
            ))}
          </ListTable>
          <ul className="flex  flex-row items-end justify-end w-full gap-2">
            {pagination.map((p) => (
              <li
                key={p}
                onClick={() => setPage(p)}
                className={`border border-gray-900 w-6 h-6 text-xs flex items-center justify-center cursor-pointer ${p === page ? 'bg-gray-900 text-white' : ''}`}
              >
                {p}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className="text-center p-4 text-red-600 w-full">
          Vous n'avez pas encore saisie de résultat
        </p>
      )}
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
