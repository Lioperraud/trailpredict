import TitleH2 from './TitleH2'

function Card({ title, children, classname }) {
  return (
    <div
      className={`bg-white rounded-lg shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] p-4 flex flex-col items-start gap-4 ${classname}`}
    >
      <TitleH2 title={title} />
      {children}
    </div>
  )
}
export default Card
