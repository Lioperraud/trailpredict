function ButtonSecondary({ libelle, onclick = () => {}, disabled = false }) {
  return (
    <button
      type="button"
      onClick={onclick}
      disabled={disabled}
      className="px-8 py-3 xl:py-4 w-full xl:w-auto bg-white border-primary border rounded-lg text-center text-primary font-medium leading-4 uppercase cursor-pointer hover:from-slate-100 text-sm xl:text-base disabled:opacity-30"
    >
      {libelle}
    </button>
  )
}
export default ButtonSecondary
