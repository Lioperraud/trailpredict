function ButtonPrimary({ libelle, onclick = () => {}, disabled = false }) {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className="px-8 py-4 bg-primary rounded-lg text-center text-white font-medium leading-4 uppercase cursor-pointer disabled:opacity-30"
    >
      {libelle}
    </button>
  )
}
export default ButtonPrimary
