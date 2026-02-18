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

/*
<div className="w-32 h-9 px-2 bg-linear-311 from-slate-700 to-gray-900 rounded-xl inline-flex justify-center items-center">
  <div className="size- inline-flex flex-col justify-center items-center overflow-hidden">
    <div className="h-6 inline-flex justify-start items-center">
      <div className="size- flex justify-start items-start gap-1 overflow-hidden">
        <div className="w-24 h-3.5 text-center justify-center text-white text-[10px] font-bold font-['Helvetica'] leading-4">ADD A NEW CARD</div>
      </div>
    </div>
    <div className="size- px-3 inline-flex justify-start items-start overflow-hidden">
      <div className="size-[0.01px] bg-stone-300" />
    </div>
  </div>
</div>
*/
