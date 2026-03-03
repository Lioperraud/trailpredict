import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import HeaderMobile from './components/HeaderMobile'
import { useState } from 'react'
import LogInfo from './components/LogInfo'

export default function Layout() {
  const [affMenu, setAffMenu] = useState(false)
  return (
    <div className="flex">
      <NavBar affMenu={affMenu} setAffMenu={setAffMenu} />
      <main className="flex-1">
        <LogInfo />
        <HeaderMobile setAffMenu={setAffMenu} />
        <Outlet />
      </main>
    </div>
  )
}
