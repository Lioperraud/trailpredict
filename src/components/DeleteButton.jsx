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
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="12"
        viewBox="0 0 9 12"
        fill="currentColor"
        className="w-4 h-auto cursor-pointer text-red-500"
        onClick={() => setConfirmDelete(true)}
      >
        <path d="M0.625 10C0.625 10.6875 1.1875 11.25 1.875 11.25H6.875C7.5625 11.25 8.125 10.6875 8.125 10V3.75C8.125 3.0625 7.5625 2.5 6.875 2.5H1.875C1.1875 2.5 0.625 3.0625 0.625 3.75V10ZM8.125 0.625H6.5625L6.11875 0.18125C6.00625 0.06875 5.84375 0 5.68125 0H3.06875C2.90625 0 2.74375 0.06875 2.63125 0.18125L2.1875 0.625H0.625C0.28125 0.625 0 0.90625 0 1.25C0 1.59375 0.28125 1.875 0.625 1.875H8.125C8.46875 1.875 8.75 1.59375 8.75 1.25C8.75 0.90625 8.46875 0.625 8.125 0.625Z" />
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
