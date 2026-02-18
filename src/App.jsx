import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Previsions from './pages/Previsions'
import Resultats from './pages/Resultats'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/previsions" element={<Previsions />} />
          <Route path="/resultats" element={<Resultats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
