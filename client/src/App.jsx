import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, LandingPage } from './pages'

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
