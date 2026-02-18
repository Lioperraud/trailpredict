import { NavLink } from 'react-router-dom'
import logoImg from '../assets/logo-trailpredict-mini.png'
import IcoHome from '../assets/ico-home.svg?react'
import IcoPrevision from '../assets/ico-prevision.svg?react'
import IcoResultat from '../assets/ico-resultat.svg?react'

function NavBar() {
  const linkClass = ({ isActive }) =>
    `flex gap-2 px-4 py-2 rounded-lg transition delay-150 duration-200 ease-in ${
      isActive ? 'bg-gray-800 text-white' : 'text-gray-500 hover:text-white'
    }`
  return (
    <nav className="w-64 flex-none min-h-screen bg-gray-700  text-white flex flex-col p-4 gap-2">
      <img src={logoImg} alt="" className="w-48 mx-auto mt-4 mb-6" />
      <NavLink to="/" className={linkClass}>
        <IcoHome />
        Dashboard
      </NavLink>
      <NavLink to="/previsions" className={linkClass}>
        <IcoPrevision />
        Prévisions
      </NavLink>
      <NavLink to="/resultats" className={linkClass}>
        <IcoResultat />
        Résultats
      </NavLink>
    </nav>
  )
}

export default NavBar
