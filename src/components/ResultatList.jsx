import ResultatElement from './ResultatElement'
import InputSearch from './InputSearch'
import ListTable from './ListTable'
import { useState, useEffect } from 'react'

function ResultatList({ resultats, setResultats, techniciteTab }) {
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
    </>
  )
}
export default ResultatList
