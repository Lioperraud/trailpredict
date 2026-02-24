import { useState } from 'react'
import DeleteButton from './DeleteButton'
import { TECHNICITE } from '../constants/resultat'

function ResultatElement({ resultat, onDelete, onEdit }) {
  const dateFormatFr = new Date(resultat.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
  const [affDetail, setAffDetail] = useState(false)

  return (
    <li className="grid grid-cols-12 gap-4 py-3 border-b border-gray-200 text-primary">
      <span className="col-span-2 flex gap-2 items-center font-bold">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-auto cursor-pointer text-primary"
          onClick={() => setAffDetail(!affDetail)}
        >
          <path d="M17.5 20h-16c-0.827 0-1.5-0.673-1.5-1.5v-16c0-0.827 0.673-1.5 1.5-1.5h16c0.827 0 1.5 0.673 1.5 1.5v16c0 0.827-0.673 1.5-1.5 1.5zM1.5 2c-0.276 0-0.5 0.224-0.5 0.5v16c0 0.276 0.224 0.5 0.5 0.5h16c0.276 0 0.5-0.224 0.5-0.5v-16c0-0.276-0.224-0.5-0.5-0.5h-16z"></path>
          {!affDetail && (
            <path d="M14.5 10h-4.5v-4.5c0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.5v4.5h-4.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h4.5v4.5c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-4.5h4.5c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5z"></path>
          )}
          {affDetail && (
            <path d="M14.5 11h-10c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path>
          )}
        </svg>

        {dateFormatFr}
      </span>
      <span className="col-span-4 font-bold">{resultat.nom}</span>
      <span className="col-span-1 text-right">{resultat.distance}</span>
      <span className="col-span-1 text-right">{resultat.denivele}</span>
      <span className="col-span-2 font-bold text-right">{resultat.temps}</span>
      <span className="col-span-1 text-right">{resultat.indice}</span>
      <span className="col-span-1 flex justify-end items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          className="w-5 h-auto cursor-pointer"
          fill="currentColor"
          onClick={() => onEdit(resultat)}
        >
          <path d="M1.5 8.73V10.25C1.5 10.39 1.61 10.5 1.75 10.5H3.27C3.335 10.5 3.4 10.475 3.445 10.425L8.905 4.97L7.03 3.095L1.575 8.55C1.525 8.6 1.5 8.66 1.5 8.73ZM10.355 3.52C10.55 3.325 10.55 3.01 10.355 2.815L9.185 1.645C8.99 1.45 8.675 1.45 8.48 1.645L7.565 2.56L9.44 4.435L10.355 3.52Z" />
        </svg>

        <DeleteButton
          onClick={() => onDelete(resultat.id)}
          precisions={`Trail : ${resultat.nom}`}
        />
      </span>
      {affDetail && (
        <span className="col-span-12 italic">
          <span className="font-bold">km-effort</span> : {resultat.kmEffort} /{' '}
          <span className="font-bold">Technicité</span>:{' '}
          {TECHNICITE.find((item) => item.value === resultat.technicite)
            ?.label || 'nc'}{' '}
          / <span className="font-bold">Condition difficile</span> :{' '}
          {resultat.conditionDifficile ? 'oui' : 'non'}
        </span>
      )}
    </li>
  )
}
export default ResultatElement
