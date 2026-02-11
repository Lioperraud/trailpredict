import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Dashboard from './pages/Dashboard'
import Previsions from './pages/Previsions'
import Resultats from './pages/Resultats'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/previsions" element={<Previsions />} />
          <Route path="/resultats" element={<Resultats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
