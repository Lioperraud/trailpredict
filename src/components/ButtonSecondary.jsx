function ButtonSecondary({ libelle, onclick = () => {}, disabled = false }) {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className="px-8 py-2 bg-linear-311 bg-white text-gray-800 border-1 border-gray-800 font-medium rounded-lg cursor-pointer hover:bg-gray-50 disabled:opacity-30"
    >
      {libelle}
    </button>
  )
}
export default ButtonSecondary
