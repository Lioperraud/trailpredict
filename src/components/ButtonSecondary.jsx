function ButtonSecondary({ libelle, onclick = () => {}, disabled = false }) {
  return (
    <button
      type="button"
      onClick={onclick}
      disabled={disabled}
      className="px-8 py-4 bg-white border-primary border rounded-lg text-center text-primary font-medium leading-4 uppercase cursor-pointer hover:from-slate-100 disabled:opacity-30"
    >
      {libelle}
    </button>
  )
}
export default ButtonSecondary
