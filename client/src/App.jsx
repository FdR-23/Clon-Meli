import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './page/Home'
import ListProductSearched from './components/ListProductSearched'
function App() {



  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search/product' element={<ListProductSearched />} />
      </Routes>

    </Router>



  )
}

export default App
