import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './routes/PrivateRoute'
import Layout from './Layout'
import Home from './pages/Home'
import Previsions from './pages/Previsions'
import Resultats from './pages/Resultats'
import Login from './pages/Login'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/previsions"
              element={
                <PrivateRoute>
                  <Previsions />
                </PrivateRoute>
              }
            />
            <Route
              path="/resultats"
              element={
                <PrivateRoute>
                  <Resultats />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
