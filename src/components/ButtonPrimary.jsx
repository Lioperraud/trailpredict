function ButtonPrimary({ libelle, onclick = () => {}, disabled = false }) {
  return (
    <button
      onClick={onclick}
      disabled={disabled}
      className="px-8 py-3 xl:py-4 w-full xl:w-auto bg-primary border border-primary rounded-lg text-center text-white font-medium leading-4 uppercase cursor-pointer text-sm xl:text-base disabled:opacity-30"
    >
      {libelle}
    </button>
  )
}
export default ButtonPrimary
