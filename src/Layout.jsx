import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

export default function Layout() {
  return (
    <div className="flex font-inter bg-fond">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
