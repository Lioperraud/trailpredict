import { NavLink } from 'react-router-dom'
import MenuItem from './MenuItem'
import logoImg from '../assets/logo-trailpredict.png'
import logoImgMini from '../assets/logo-trailpredict-mini.png'
import IcoHome from '../assets/ico-home.svg?react'
import IcoPrevision from '../assets/ico-prevision.svg?react'
import IcoResultat from '../assets/ico-resultat.svg?react'
import IcoClose from '../assets/ico-close.svg?react'

function NavBar({ affMenu, setAffMenu }) {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition delay-150 duration-200 ease-in ${
      isActive
        ? 'bg-white text-primary shadow-[0px_3.500000238418579px_5.500000476837158px_0px_rgba(0,0,0,0.02)]'
        : 'text-white'
    }`
  const navClass = `w-full xl:w-64 flex-none min-h-screen flex flex-col p-4 gap-2 absolute top-0 bottom-0 bg-primary z-10 transition-all duration-150 ease-linear xl:relative xl:translate-x-0 xl:bg-fond ${affMenu ? 'translate-x-0' : '-translate-x-full'}`

  return (
    <nav className={navClass}>
      <IcoClose
        className="absolute top-4 right-4 w-5 h-auto cursor-pointer xl:hidden"
        onClick={() => setAffMenu(false)}
      />
      <NavLink
        to="/"
        className="w-36 mx-auto mt-2 mb-4 bg-primary rounded-lg shadow-[0px_3.500000238418579px_5.500000476837158px_0px_rgba(0,0,0,0.02)] xl:w-32 xl:p-4"
        onClick={() => setAffMenu(false)}
      >
        <img src={logoImg} alt="" className="hidden xl:block" />
        <img src={logoImgMini} alt="" className="block xl:hidden" />
      </NavLink>
      <NavLink to="/" className={linkClass} onClick={() => setAffMenu(false)}>
        <MenuItem to="/" libelle="Accueil" Icon={IcoHome} />
      </NavLink>
      <NavLink
        to="/resultats"
        className={linkClass}
        onClick={() => setAffMenu(false)}
      >
        <MenuItem to="/resultats" libelle="Résultats" Icon={IcoResultat} />
      </NavLink>
      <NavLink
        to="/previsions"
        className={linkClass}
        onClick={() => setAffMenu(false)}
      >
        <MenuItem to="/previsions" libelle="Prévisions" Icon={IcoPrevision} />
      </NavLink>
    </nav>
  )
}

export default NavBar
