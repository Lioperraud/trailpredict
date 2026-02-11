function ButtonPrimary({ libelle, onclick = () => {} }) {
  return (
    <button
      onClick={onclick}
      className="px-8 py-2 bg-linear-311 bg-gray-800 text-white font-medium rounded-lg cursor-pointer hover:bg-gray-900"
    >
      {libelle}
    </button>
  )
}
export default ButtonPrimary
