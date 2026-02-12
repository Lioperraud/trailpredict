function ButtonPrimary({ libelle, onclick = () => {}, disabled = false }) {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className="px-8 py-2 bg-linear-311 bg-gray-800 text-white font-medium rounded-lg cursor-pointer hover:bg-gray-900 disabled:opacity-30"
    >
      {libelle}
    </button>
  )
}
export default ButtonPrimary
