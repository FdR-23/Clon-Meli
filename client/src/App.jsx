import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import EndPage from './components/EndPage'
import Home from './page/Home'
import ListProductSearched from './page/ListProductSearched'
import MoreCategories from './components/MoreCategories'

function App() {



  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/more-product' element={<MoreCategories />} />
        <Route path='/search/product' element={<ListProductSearched />} />
      </Routes>
      <EndPage />
    </Router>



  )
}

export default App
