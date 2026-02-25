import fondImg from '../assets/fond.png'

function CardPush({ children, classname }) {
  return (
    <div
      className={`rounded-lg shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] p-4 xl:p-8 bg-linear-212 from-degrade-from to-degrade-to ${classname}`}
    >
      {children}
    </div>
  )
}
export default CardPush
