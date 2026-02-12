import ResultatElement from './ResultatElement'
import InputSearch from './InputSearch'
import ListTable from './ListTable'
import { useState, useEffect } from 'react'

function ResultatList({ resultats, techniciteTab }) {
  const [search, setSearch] = useState('')
  const filteredResultats = resultats.filter((r) =>
    r.nom.toLowerCase().includes(search.toLowerCase()),
  )
  const orderedResultats = filteredResultats.sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  )

  const headerListTable = [
    {
      libelle: 'Date',
      class: 'col-span-2',
    },
    {
      libelle: 'Course',
      class: 'col-span-4',
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
          />
        ))}
      </ListTable>
    </>
  )
}
export default ResultatList
