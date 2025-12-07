import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import About from './views/About'
import Contact from './views/Contact'
import Resume from './views/Resume'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
  )
}

export default App
