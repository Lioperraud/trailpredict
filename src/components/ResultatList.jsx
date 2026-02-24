import ResultatElement from './ResultatElement'
import InputSearch from './InputSearch'
import ListTable from './ListTable'
import Modal from './Modal'
import ButtonPrimary from './ButtonPrimary'
import ResultatForm from './ResultatForm'
import { useState, useEffect } from 'react'
import { HEADERLISTTABLE } from '../constants/resultat'
import { timeToSeconds } from '../utils/date'
import { scoreTrail } from '../utils/calcul'
import { getResultats } from '../utils/resultat'

function ResultatList() {
  //Valeurs de la liste
  const [resultats, setResultats] = useState(() => {
    return getResultats()
  })
  useEffect(() => {
    localStorage.setItem('resultats', JSON.stringify(resultats))
  }, [resultats])

  //Ajout des valeurs calculées
  const resultatsWithKmEffort = resultats.map((r) => ({
    ...r,
    kmEffort: Math.round(r.distance * 1 + (r.denivele * 1) / 100),
  }))
  const resultatsWithIndice = resultatsWithKmEffort.map((r) => ({
    ...r,
    indice: scoreTrail(
      r.distance,
      r.denivele,
      r.temps,
      r.technicite,
      r.conditionDifficile,
    ),
  }))

  //Affichage de la liste suivant filtre - ordre - pagination
  const [search, setSearch] = useState('')
  const [ordre, setOrdre] = useState({ champ: 'date', desc: true })
  const [page, setPage] = useState(1)
  const nbResultatsParPage = 10
  const filteredResultats = resultatsWithIndice.filter((r) =>
    ['nom', 'date'].some((key) =>
      r[key].toLowerCase().includes(search.toLowerCase()),
    ),
  )
  const orderedResultats = filteredResultats.sort((a, b) => {
    if (ordre.champ == 'date') {
      if (ordre.desc) return new Date(b[ordre.champ]) - new Date(a[ordre.champ])
      else return new Date(a[ordre.champ]) - new Date(b[ordre.champ])
    } else if (ordre.champ == 'temps') {
      if (ordre.desc)
        return timeToSeconds(b[ordre.champ]) - timeToSeconds(a[ordre.champ])
      else return timeToSeconds(a[ordre.champ]) - timeToSeconds(b[ordre.champ])
    } else if (
      ordre.champ == 'distance' ||
      ordre.champ == 'denivele' ||
      ordre.champ == 'indice'
    ) {
      if (ordre.desc) return +b[ordre.champ] - +a[ordre.champ]
      else return +a[ordre.champ] - +b[ordre.champ]
    } else {
      if (ordre.desc) return b[ordre.champ].localeCompare(a[ordre.champ])
      else return a[ordre.champ].localeCompare(b[ordre.champ])
    }
  })
  const paginatedResultats = orderedResultats.slice(
    page * nbResultatsParPage - nbResultatsParPage,
    page * nbResultatsParPage,
  )
  const totalPages = Math.ceil(resultats.length / nbResultatsParPage)
  const pagination = Array.from({ length: totalPages }, (_, i) => i + 1)
  const trilist = (name) => {
    if (name.length) {
      let newDesc = false
      if (name == ordre.champ) newDesc = !ordre.desc
      setOrdre({ champ: name, desc: newDesc })
    }
  }

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
          <ListTable
            header={HEADERLISTTABLE}
            onclickheader={trilist}
            ordre={ordre}
          >
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
                className={`border border-primary w-6 h-6 text-xs flex items-center justify-center cursor-pointer ${p === page ? 'bg-primary text-white' : 'text-secondary'}`}
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
