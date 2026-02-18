function CardPushLight({ children, classname }) {
  return (
    <div
      className={`rounded-lg shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] p-6 bg-white ${classname}`}
    >
      {children}
    </div>
  )
}
export default CardPushLight
