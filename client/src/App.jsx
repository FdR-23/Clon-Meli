import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar.jsx'
import EndPage from './components/EndPage'
import Home from './page/Home.jsx'
import ListProductSearched from './page/ListProductSearched.jsx'
import MoreCategories from './page/MoreCategories.jsx'

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
