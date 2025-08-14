import './App.css'
import Slider from './Slider'
import Back from './Back'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Slider />} />
      <Route path="/Back" element={<Back />} />
    </Routes>
  )
}

export default App
