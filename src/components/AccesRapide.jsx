import { NavLink } from 'react-router-dom'

function AccesRapide({ url, libelle, children }) {
  return (
    <div className="border-2 border-brand rounded-lg shadow-[0px_3.5px_5.5px_0px_rgba(0,0,0,0.02)] p-4">
      <NavLink to={url} className="flex flex-col items-center gap-4 text-3xl">
        {children}
        {libelle}
      </NavLink>
    </div>
  )
}
export default AccesRapide
