function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] p-4 flex flex-col gap-4 ">
      <h2 className="justify-start text-gray-700 text-lg font-bold">{title}</h2>
      {children}
    </div>
  )
}
export default Card
