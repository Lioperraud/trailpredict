import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'

export default function Layout() {
  return (
    <div className="flex">
      <NavBar />
      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>
    </div>
  )
}
