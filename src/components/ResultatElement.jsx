import { useState } from 'react'
import DeleteButton from './DeleteButton'

function ResultatElement({ resultat, techniciteTab, onDelete }) {
  const kmEffort = Math.round(
    resultat.distance * 1 + (resultat.denivele * 1) / 100,
  )
  const dateFormatFr = new Date(resultat.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  })
  const [affDetail, setAffDetail] = useState(false)
  const deleteResutat = () => {
    console.log('Delete resultat')
    console.log(resultats)
  }

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
      <span className="col-span-1 flex justify-end items-center">
        <DeleteButton
          onClick={() => onDelete(resultat.id)}
          precisions={`Trail : ${resultat.nom}`}
        />
      </span>
      {affDetail && (
        <span className="col-span-12 italic">
          <span className="font-bold">km-effort</span> : {kmEffort} /{' '}
          <span className="font-bold">Technicité</span>:{' '}
          {techniciteTab.find((item) => item.value === resultat.technicite)
            ?.label || 'nc'}{' '}
          / <span className="font-bold">Condition difficile</span> :{' '}
          {resultat.conditionDifficile ? 'oui' : 'non'}
        </span>
      )}
    </li>
  )
}
export default ResultatElement
