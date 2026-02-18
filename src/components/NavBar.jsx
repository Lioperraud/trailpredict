import { NavLink } from 'react-router-dom'
import MenuItem from './MenuItem'
import logoImg from '../assets/logo-trailpredict-v2.png'
import IcoHome from '../assets/ico-home.svg?react'
import IcoPrevision from '../assets/ico-prevision.svg?react'
import IcoResultat from '../assets/ico-resultat.svg?react'

function NavBar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition delay-150 duration-200 ease-in ${
      isActive
        ? 'bg-white text-gray-700 shadow-[0px_3.500000238418579px_5.500000476837158px_0px_rgba(0,0,0,0.02)]'
        : 'text-gray-400 hover:text-gray-700'
    }`

  return (
    <nav className="w-64 flex-none min-h-screen flex flex-col p-4 gap-2">
      <div className="w-full mx-auto mt-2 mb-4 p-8 bg-white rounded-lg shadow-[0px_3.500000238418579px_5.500000476837158px_0px_rgba(0,0,0,0.02)]">
        <img src={logoImg} alt="" />
      </div>
      <NavLink to="/" className={linkClass}>
        <MenuItem to="/" libelle="Accueil" Icon={IcoHome} />
      </NavLink>
      <NavLink to="/previsions" className={linkClass}>
        <MenuItem to="/previsions" libelle="Prévisions" Icon={IcoPrevision} />
      </NavLink>
      <NavLink to="/resultats" className={linkClass}>
        <MenuItem to="/resultats" libelle="Résultats" Icon={IcoResultat} />
      </NavLink>
    </nav>
  )
}

export default NavBar
