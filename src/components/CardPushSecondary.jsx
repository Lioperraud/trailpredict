import fondImg from '../assets/fond.png'

function CardPushSecondary({ children, classname }) {
  const backgroundStyle = { backgroundImage: `url(${fondImg})` }

  return (
    <div
      className={`rounded-lg shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] p-4 xl:p-6 bg-primary bg-top-left bg-no-repeat ${classname}`}
      style={backgroundStyle}
    >
      {children}
    </div>
  )
}
export default CardPushSecondary
