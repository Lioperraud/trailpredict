import { NavLink } from 'react-router-dom'
import logoImgMini from '../assets/logo-trailpredict-mini.png'
import IcoMenu from '../assets/ico-menu.svg?react'

function HeaderMobile({ setAffMenu }) {
  return (
    <div className="w-full h-20 flex justify-center items-center relative bg-primary xl:hidden">
      <IcoMenu
        className="absolute top-4 left-4 w-6 h-auto cursor-pointer"
        onClick={() => setAffMenu(true)}
      />
      <NavLink to="/">
        <img src={logoImgMini} alt="" className="w-36" />
      </NavLink>
    </div>
  )
}
export default HeaderMobile
