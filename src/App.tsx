import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { ROUTES } from './routes/routes'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.HOMEPAGE} element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
