import { useState } from 'react'
import DeleteButton from './DeleteButton'
import { TECHNICITE } from '../constants/resultat'

function ResultatElement({ resultat, onDelete, onEdit }) {
  const kmEffort = Math.round(
    resultat.distance * 1 + (resultat.denivele * 1) / 100,
  )
  const dateFormatFr = new Date(resultat.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
  const [affDetail, setAffDetail] = useState(false)

  return (
    <li className="grid grid-cols-12 gap-4 py-3 border-b border-gray-200">
      <span className="col-span-2 flex gap-2 items-center">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-auto cursor-pointer"
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
      <span className="col-span-3 font-bold">{resultat.nom}</span>
      <span className="col-span-2 text-right">{resultat.distance}</span>
      <span className="col-span-2 text-right">{resultat.denivele}</span>
      <span className="col-span-2 font-bold text-right">{resultat.temps}</span>
      <span className="col-span-1 flex justify-end items-center gap-2">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="w-4 h-auto cursor-pointer"
          fill="currentColor"
          onClick={() => onEdit(resultat)}
        >
          <path d="M0.5 20c-0.13 0-0.258-0.051-0.354-0.146-0.137-0.137-0.183-0.342-0.116-0.524l2-5.5c0.025-0.069 0.065-0.131 0.116-0.183l13.5-13.5c0.195-0.195 0.512-0.195 0.707 0l3.5 3.5c0.195 0.195 0.195 0.512 0 0.707l-13.5 13.5c-0.052 0.052-0.114 0.091-0.183 0.116l-5.5 2c-0.056 0.020-0.113 0.030-0.171 0.030zM2.932 14.275l-1.596 4.389 4.389-1.596 13.068-13.068-2.793-2.793-13.068 13.068z"></path>
        </svg>
        <DeleteButton
          onClick={() => onDelete(resultat.id)}
          precisions={`Trail : ${resultat.nom}`}
        />
      </span>
      {affDetail && (
        <span className="col-span-12 italic">
          <span className="font-bold">km-effort</span> : {kmEffort} /{' '}
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
