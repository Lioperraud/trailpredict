function CardPush({ children, classname }) {
  return (
    <div
      className={`bg-linear-311 from-secondary to-brand rounded-lg shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] p-4 ${classname}`}
    >
      {children}
    </div>
  )
}
export default CardPush
