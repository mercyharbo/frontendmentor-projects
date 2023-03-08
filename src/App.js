import { Routes, Route } from 'react-router-dom'
import CountryDetails from './components/countryDetails'
import Home from './components/Home'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:countryName' element={<CountryDetails />} />
      </Routes>
    </div>
  )
}

export default App
