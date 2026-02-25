import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import HeaderMobile from './components/HeaderMobile'
import { useState } from 'react'

export default function Layout() {
  const [affMenu, setAffMenu] = useState(false)
  return (
    <div className="flex font-inter bg-fond">
      <NavBar affMenu={affMenu} setAffMenu={setAffMenu} />
      <main className="flex-1">
        <HeaderMobile setAffMenu={setAffMenu} />
        <Outlet />
      </main>
    </div>
  )
}
