function ButtonPrimary({ libelle, onclick = () => {}, disabled = false }) {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className="px-8 py-4 bg-linear-311 from-slate-700 to-gray-900 rounded-lg text-center text-white font-medium leading-4 uppercase cursor-pointer hover:from-slate-500 disabled:opacity-30"
    >
      {libelle}
    </button>
  )
}
export default ButtonPrimary
