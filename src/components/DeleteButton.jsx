import { useState } from 'react'
import Modal from './Modal'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'

function DeleteButton({ onClick, precisions }) {
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleConfirm = () => {
    onClick()
    setConfirmDelete(false)
  }
  return (
    <div>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-auto cursor-pointer"
        onClick={() => setConfirmDelete(true)}
      >
        <path d="M15.5 2h-3.5v-0.5c0-0.827-0.673-1.5-1.5-1.5h-2c-0.827 0-1.5 0.673-1.5 1.5v0.5h-3.5c-0.827 0-1.5 0.673-1.5 1.5v1c0 0.652 0.418 1.208 1 1.414v12.586c0 0.827 0.673 1.5 1.5 1.5h10c0.827 0 1.5-0.673 1.5-1.5v-12.586c0.582-0.206 1-0.762 1-1.414v-1c0-0.827-0.673-1.5-1.5-1.5zM8 1.5c0-0.276 0.224-0.5 0.5-0.5h2c0.276 0 0.5 0.224 0.5 0.5v0.5h-3v-0.5zM14.5 19h-10c-0.276 0-0.5-0.224-0.5-0.5v-12.5h11v12.5c0 0.276-0.224 0.5-0.5 0.5zM16 4.5c0 0.276-0.224 0.5-0.5 0.5h-12c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5h12c0.276 0 0.5 0.224 0.5 0.5v1z"></path>
        <path d="M12.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z"></path>
        <path d="M9.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z"></path>
        <path d="M6.5 7c-0.276 0-0.5 0.224-0.5 0.5v10c0 0.276 0.224 0.5 0.5 0.5s0.5-0.224 0.5-0.5v-10c0-0.276-0.224-0.5-0.5-0.5z"></path>
      </svg>

      {confirmDelete && (
        <Modal onclickclose={() => setConfirmDelete(false)}>
          <div className="flex flex-col gap-4">
            <p className="flex flex-col gap-1">
              Êtes-vous sûr de vouloir supprimer :{' '}
              <span className="font-bold">{precisions}</span>
            </p>
            <div className="flex flex-row gap-4">
              <ButtonPrimary libelle="Confirmer" onclick={handleConfirm} />
              <ButtonSecondary
                libelle="Annuler"
                onclick={() => setConfirmDelete(false)}
              />
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
export default DeleteButton
