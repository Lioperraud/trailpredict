import ResultatElement from './ResultatElement'
import InputSearch from './InputSearch'
import ListTable from './ListTable'
import { useState } from 'react'

function ResultatList() {
  const [resultats, setResultats] = useState([
    {
      id: 1,
      date: '2024-06-14',
      nom: 'Ultra01',
      distance: 170,
      denivele: 8500,
      temps: '43:54:55',
    },
    {
      id: 2,
      date: '2025-10-11',
      nom: 'GTA',
      distance: 130.87,
      denivele: 5161,
      temps: '23:07:27',
    },
    {
      id: 3,
      date: '2023-03-11',
      nom: 'Trail du Ventoux',
      distance: 73.62,
      denivele: 3863,
      temps: '12:22:59',
    },
  ])
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
      class: 'w-32',
    },
    {
      libelle: 'Course',
      class: 'flex-auto',
    },
    {
      libelle: 'Distance',
      class: 'w-16 text-right',
    },
    {
      libelle: 'Denivelé',
      class: 'w-16 text-right',
    },
    {
      libelle: 'km-effot',
      class: 'w-16 text-right',
    },
    {
      libelle: 'Temps',
      class: 'w-24 text-right',
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
          <ResultatElement key={resultat.id} resultat={resultat} />
        ))}
      </ListTable>
    </>
  )
}
export default ResultatList
